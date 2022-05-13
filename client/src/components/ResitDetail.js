import {Image} from "react-bootstrap";
import ProfileThumbnail from "./ProfileThumbnail";

export default function ResitDetail(props) {

    const resit = props.resit;
    console.log(resit)

    return (
        <div>

            <div>
              <h4>
                  Resitation {resit.name} <small>conducted by {resit.teacher.username}</small>
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
              </div>
        </div>
    )
}