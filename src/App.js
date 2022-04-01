import './App.css';
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import {Container, Row} from "react-bootstrap";

function App() {
  return (
      <div className="App">
          <Container>
              <Row>
                  <Header />
              </Row>
              <Row>
                  <Outlet/>
              </Row>
          </Container>
      </div>
  );
}

export default App;
