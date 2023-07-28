import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeMovies(props) {
    const {subtitle, moviesStorage, text}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {moviesStorage.map((Movie, index)=>(
                            <li key={index}>{Movie.label}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            {/* {text &&(
                <Card className="text-center p-2 card-resume">
                    <Card.Body>
                        <Card.Subtitle>
                            <b>Your Additional Hobbie is: </b>
                        </Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )} */}
        </div>
    );
}
