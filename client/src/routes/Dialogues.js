import {Link} from "react-router-dom";
import {Button, Col, ListGroup, Row, Tab, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getDialoguesAction} from "../actions/dialogues";
import {getDialogues} from "../selectors/dialogues";
import {useEffect, useState} from "react";
import AddDialogue from "../components/AddDialogue";
import EditDialogue from "../components/EditDialogue";

export default function Dialogues() {
    const initState = {show: false, id: null};
    const [addDialogueShow, setAddDialogueShow] = useState(false);
    const [editDialogueShow, setEditDialogueShow] = useState(initState);
    const [deleteDialogueShow, setDeleteDialogueShow] = useState(initState);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDialoguesAction());
    }, []);
    const dialogues = useSelector(getDialogues);
    // let dialogueEntriesLinks = [];
    // todo dialogue link component
    // <Link key={i} to={`/dialogues/${dialogues[i].id}`}>
    //     {dialogues[i].name}
    // </Link>

    let dialogueListItems = [];
    let dialogueDescriptionList = [];
    for (let i = 0; i < dialogues.length; i++) {
        dialogueListItems.push(
            <ListGroup.Item action key={i} href={"#link" + i}>
                {dialogues[i].name}
                <Button onClick={
                    () => setEditDialogueShow({
                        show: true, id: dialogues[i].id
                    })
                }>Edit</Button>
                <Button onClick={
                    () => setDeleteDialogueShow({
                        show: true, id: dialogues[i].id
                    })
                }>Delete</Button>
            </ListGroup.Item>
        )
        dialogueDescriptionList.push(
            <Tab.Pane key={i} eventKey={"#link" + i}>
                <div>
                    {dialogues[i].content}

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
                          <Button onClick={() => setAddDialogueShow(true)}>Add a dialogue</Button>
                      </ListGroup.Item>
                      {dialogueListItems}
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                      {dialogueDescriptionList}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

            <Modal
                size="lg"
                show={addDialogueShow}
                onHide={() => setAddDialogueShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddDialogue onSuccess={()=>setAddDialogueShow(false)}/>
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={editDialogueShow.show}
                // todo
                onHide={() => setEditDialogueShow({...initState, id: editDialogueShow.id})}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditDialogue
                        id={editDialogueShow.id}
                        onSuccess={()=>setEditDialogueShow({...initState, id: editDialogueShow.id})} />
                </Modal.Body>
            </Modal>

            <Modal
                show={deleteDialogueShow.show}
                onHide={() => setDeleteDialogueShow(initState)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary"
                          onClick={() => setDeleteDialogueShow({...initState, id: deleteDialogueShow.id})}
                  >
                    Close
                  </Button>
                  <Button variant="primary"
                          onClick={() => setDeleteDialogueShow({...initState, id: deleteDialogueShow.id})}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}