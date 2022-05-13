import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import {Container, Row} from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
          <Container className={"d-flex flex-column"} style={{height: 100 + "vh"}}>
              <Row className="mb-3">
                  <Header />
              </Row>
              <Row className={'mb-3'}>
                  <Outlet/>
              </Row>
              <Row className={"mt-auto"}>
                  <Footer />
              </Row>
          </Container>
      </div>
  );
}

export default App;
