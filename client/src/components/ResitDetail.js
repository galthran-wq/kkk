import {Image} from "react-bootstrap";
import ProfileThumbnail from "./ProfileThumbnail";

export default function ResitDetail(props) {

    const resit = props.resit;

    return (
        <div>

            <div>
              <h4>
                  Resitation {resit.name} <small>conducted by {resit.username}</small>
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
                    <h2>I Love Food</h2>
                    <h5><span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
                    <h5><span className="label label-danger">Food</span> <span
                        className="label label-primary">Ipsum</span></h5><br/>
                    <p>{resit.description}</p>
                    <br/>
                </div>
              </div>
        </div>
    )
}