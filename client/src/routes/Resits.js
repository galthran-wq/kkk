import {Button, Col, ListGroup, Row, Tab, Modal, Badge} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getResits} from "../selectors/resits";
import {useEffect, useState} from "react";
import AddResit from "../components/AddResit";
import EditResit from "../components/EditResit";
import {deleteResit, getResitsAction} from "../actions/resits";
import Header from "../components/Header";
import ResitDetail from "../components/ResitDetail";
import {BsFillCalendarCheckFill, BsFillCalendarFill, BsFillPersonFill} from "react-icons/bs";

export default function Resits() {
    const [addResitShow, setAddResitShow] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getResitsAction());
    }, []);
    const resits = useSelector(getResits);

    let resitListItems = [];
    let resitDescriptionList = [];
    for (let i = 0; i < resits.length; i++) {

        let statusBadge;

        if (resits[i].hasEnded) {
            statusBadge = <Badge bg="success"><BsFillCalendarCheckFill/></Badge>;
        } else {
            statusBadge = <Badge bg={"info"}><BsFillCalendarFill/> {resits[i].startDate}</Badge>
        }

        resitListItems.push(
            <ListGroup.Item
                as={"li"}
                className="d-flex justify-content-between align-items-start"
                action
                key={i}
                href={"#link" + i}
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        {resits[i].name}
                    </div>
                    conducted by {resits[i].teacher.username}
                </div>
                <Badge bg="secondary" pill>
                    {resits[i].participants.length} <BsFillPersonFill />
                </Badge>
                {statusBadge}
                {/*todo move those buttons to the actual resit somewhere*/}
            </ListGroup.Item>
        )
        resitDescriptionList.push(
            <Tab.Pane key={i} eventKey={"#link" + i}>
                <div>
                    <ResitDetail resit={resits[i]} />
                </div>
            </Tab.Pane>
        )
    }
    return(
        <div>
            <Tab.Container defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                    <Button onClick={() => setAddResitShow(true)}>Add a resit</Button>
                    <ListGroup as="ol" numbered>
                      {resitListItems}
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                      {resitDescriptionList}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

            <Modal
                size="lg"
                show={addResitShow}
                onHide={() => setAddResitShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddResit onSuccess={()=>setAddResitShow(false)}/>
                </Modal.Body>
            </Modal>

        </div>

    )
}