import './App.css';
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import {Container, Row} from "react-bootstrap";

function App() {
  return (
      <div className="App">
          <Container>
              <Row className="mb-3">
                  <Header />
              </Row>
              <Row className={'margi'}>
                  <Outlet/>
              </Row>
          </Container>
      </div>
  );
}

export default App;
