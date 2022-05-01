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
    const initState = {show: false, id: null};
    const [addResitShow, setAddResitShow] = useState(false);
    const [editResitShow, setEditResitShow] = useState(initState);
    const [deleteResitShow, setDeleteResitShow] = useState(initState);

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
                {/*<Button onClick={*/}
                {/*    () => setEditResitShow({*/}
                {/*        show: true, id: resits[i].id*/}
                {/*    })*/}
                {/*}>Edit</Button>*/}
                {/*<Button onClick={*/}
                {/*    () => setDeleteResitShow({*/}
                {/*        show: true, id: resits[i].id, slug: resits[i].slug*/}
                {/*    })*/}
                {/*}>Delete</Button>*/}
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

            <Modal
                size="lg"
                show={editResitShow.show}
                onHide={() => setEditResitShow({...initState, id: editResitShow.id})}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditResit
                        id={editResitShow.id}
                        onSuccess={()=>setEditResitShow({...initState, id: editResitShow.id})} />
                </Modal.Body>
            </Modal>

            <Modal
                show={deleteResitShow.show}
                onHide={() => setDeleteResitShow(initState)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary"
                          onClick={() => setDeleteResitShow({...initState, id: deleteResitShow.id})}
                  >
                    Close
                  </Button>
                  <Button variant="primary"
                          onClick={()=>dispatch(
                              deleteResit(
                                  deleteResitShow.id,
                                  deleteResitShow.slug,
                                  ()=>setDeleteResitShow({...initState, id: deleteResitShow.id, slug: deleteResitShow.slug})
                              )
                          )}
                  >
                    Confirm Delete
                  </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}