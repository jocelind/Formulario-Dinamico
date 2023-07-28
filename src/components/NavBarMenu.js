import { Container, Navbar } from "react-bootstrap";

export default function NavBarMenu() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!">
                        Dynamic <b>Form</b>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {" "}
                            <a href="https://gmail.com" target="_blank" rel="noreferrer">Jocelin Diaz</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
