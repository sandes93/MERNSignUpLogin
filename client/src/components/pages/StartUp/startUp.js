import React from "react";
import logo from '../../../logo.svg';
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
// import GameLoop from './components/three.js';
// import ThreeD from '../../ThreeD/threeD';

function StartUp() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </Col>
                    </Row>
                </Container>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="shapeSelect"
                    // target="_blank"
                    // rel="noopener noreferrer"
                >
                    Shape Select
                </a>
            </header>
        </div>
    );
}

export default StartUp;