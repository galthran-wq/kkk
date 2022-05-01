import {Link} from "react-router-dom";
import {Button, Col, ListGroup, Row, Tab, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getResits} from "../selectors/resits";
import {useEffect, useState} from "react";
import AddResit from "../components/AddResit";
import EditResit from "../components/EditResit";
import {getResitsAction} from "../actions/resits";

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
    // let resitEntriesLinks = [];
    // todo resit link component
    // <Link key={i} to={`/resits/${resits[i].id}`}>
    //     {resits[i].name}
    // </Link>

    let resitListItems = [];
    let resitDescriptionList = [];
    for (let i = 0; i < resits.length; i++) {
        resitListItems.push(
            <ListGroup.Item action key={i} href={"#link" + i}>
                {resits[i].name}
                <Button onClick={
                    () => setEditResitShow({
                        show: true, id: resits[i].id
                    })
                }>Edit</Button>
                <Button onClick={
                    () => setDeleteResitShow({
                        show: true, id: resits[i].id
                    })
                }>Delete</Button>
            </ListGroup.Item>
        )
        resitDescriptionList.push(
            <Tab.Pane key={i} eventKey={"#link" + i}>
                <div>
                    {resits[i].content}

                </div>
            </Tab.Pane>
        )
    }
    return(
        <div>
            <Tab.Container defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                      <ListGroup.Item>
                          <Button onClick={() => setAddResitShow(true)}>Add a resit</Button>
                      </ListGroup.Item>
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
                // todo
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
                          onClick={() => setDeleteResitShow({...initState, id: deleteResitShow.id})}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}