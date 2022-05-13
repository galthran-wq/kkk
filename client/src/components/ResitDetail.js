import {Button, Image, Modal} from "react-bootstrap";
import ProfileThumbnail from "./ProfileThumbnail";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import {useDispatch, useSelector} from "react-redux";
import {getUserId, getUsername} from "../selectors";
import {deleteResit, signOffResitAction, signOnResitAction} from "../actions/resits";
import EditResit from "./EditResit";
import {useState} from "react";

export default function ResitDetail(props) {

    const dispatch = useDispatch();
    const resit = props.resit;
    const currentUserName = useSelector(getUsername);
    console.log(resit)

    const columns = [{
      dataField: 'id',
      text: 'Student\'s ID'
    }, {
      dataField: 'name',
      text: 'Student\'s Name'
    }, {
      dataField: 'mark',
      text: 'Student\'s mark'
    }];
    const products = [{id: 1, name: "a", mark: 3}]

    let resultTable;
    if (resit.hasEnded && resit.teacher.username === currentUserName) {
        resultTable = <BootstrapTable
            keyField="id"
            data={ products }
            columns={ columns }
            cellEdit={cellEditFactory({mode: 'click'})}
        />
    } else if (resit.hasEnded)
        resultTable = <BootstrapTable
            keyField="id"
            data={ products }
            columns={ columns }
        />
    else
        resultTable = <p>The results of the recitation will be shown here!</p>

    let signOnOffButton;
    if (
        resit.teacher.username !== currentUserName &&
        !resit.hasEnded
    ) {
        if (resit.participants.find(user => user.username === currentUserName)) {
            signOnOffButton = <Button
                variant="danger"
                onClick={
                    () => dispatch(signOffResitAction(
                        resit.id,
                        resit.slug,
                        ()=> {
                            //todo show message
                        }
                    ))
                }
            >
                SignOff
            </Button>
        } else {
            signOnOffButton = <Button
                variant="success"
                onClick={
                    () => dispatch(signOnResitAction(
                        resit.id,
                        resit.slug,
                        ()=> {
                            //todo show message
                        }
                    ))
                }
            >
                SignOn
            </Button>
        }
    }

    let resitControlPanel;
    const [editResitShow, setEditResitShow] = useState(false);
    const [deleteResitShow, setDeleteResitShow] = useState(false);
    if (resit.teacher.username === currentUserName) {
        resitControlPanel = <div>
            <Button
                onClick={() => setEditResitShow(true)}
                className={"mx-1"}
            >
                Edit</Button>
            <Button onClick={
                () => setDeleteResitShow(true)
            }>Delete</Button>
        </div>
    }

    return (
        <div>

            <div>
                <h4 className={"d-flex justify-content-between"}>
                  <div>
                      Resitation {resit.name} <small>conducted by {resit.teacher.username}</small>
                  </div>
                  <div>
                      {resitControlPanel}
                      {signOnOffButton}
                  </div>
              </h4>
              <hr />
                <div className={"float-start p-3"}>
                    <div className={"d-flex flex-column"}>
                        <Image  className={"mb-3"} src={"https://picsum.photos/333/200"}></Image>
                        <div>
                            <ProfileThumbnail  />
                        </div>
                        <div className={"d-flex"}>
                            <b className={"mr-1 d-block"}><small>Participants ({resit.participants.length}):</small></b>
                            <div>
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                                <Image
                                    src={"https://picsum.photos/30/30"}
                                    roundedCircle={true}
                                    style={{"opacity":0.9, "marginRight": -7 + "px"}}
                                    className={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={""}>
                    <h2>{resit.name}</h2>
                    <h5><span className="glyphicon glyphicon-time"></span> Starting on {resit.startDate}</h5>
                    <h5><span className="label label-danger">Food</span> <span
                        className="label label-primary">Ipsum</span></h5><br/>
                    <p>{resit.description}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nobis quae quidem rem? Atque, eius eveniet. Nam nobis nulla quas quod recusandae sequi. Dignissimos esse molestiae pariatur, porro quas qui reprehenderit. Dicta eos magnam recusandae saepe! Aliquid assumenda at beatae culpa dolore, dolorem enim eos explicabo fugit itaque laudantium natus officiis perspiciatis provident repudiandae unde ut voluptatibus voluptatum! Accusamus adipisci aspernatur at aut consectetur delectus, distinctio dolorem ea eum, hic quasi quo tenetur. Ab aspernatur at, commodi corporis cupiditate deserunt distinctio dolor, ea itaque iure maxime minima minus possimus praesentium repellendus temporibus voluptatem. Est laboriosam minima natus nesciunt qui voluptas!</p>
                    <br/>
                </div>
                <h4>Results</h4>
                <hr/>
                {resultTable}
              </div>


            <Modal
                size="lg"
                show={editResitShow}
                onHide={() => setEditResitShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditResit
                        id={resit.id}
                        onSuccess={()=>setEditResitShow(false)} />
                </Modal.Body>
            </Modal>

            <Modal
                show={deleteResitShow}
                onHide={() => setDeleteResitShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                            onClick={() => setDeleteResitShow(false)}
                    >
                        Close
                    </Button>
                    <Button variant="danger"
                            onClick={()=>dispatch(
                                deleteResit(
                                    resit.id,
                                    resit.slug,
                                    ()=>setDeleteResitShow(false)
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