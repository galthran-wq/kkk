import {Link} from "react-router-dom";
import {getDialogues} from '../data/storage';
import {Col, ListGroup, Row, Tab } from "react-bootstrap";

export default function Dialogues() {
    const dialogues = getDialogues();
    // let dialogueEntriesLinks = [];
    // todo dialogue link component
    // <Link key={i} to={`/dialogues/${dialogues[i].id}`}>
    //     {dialogues[i].name}
    // </Link>

    let dialogueListItems = [];
    let dialogueDescriptionList = [];
    for (let i = 0; i < dialogues.length; i++) {
        dialogueListItems.push(
            <ListGroup.Item action href={"#link" + i}>
                {dialogues[i].name}
            </ListGroup.Item>
        )
        dialogueDescriptionList.push(
            <Tab.Pane eventKey={"#link" + i}>
                <div>
                    {dialogues[i].content}
                </div>
            </Tab.Pane>
        )
    }
    return(
        <Tab.Container defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
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
    )
}