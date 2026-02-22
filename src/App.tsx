import React from "react";
import "./App.css";
import dog from "./dog.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Katlego Matsipane UD CISC275 with React Hooks and TypeScript
                Hello World
            </header>
            {/*Task 1 */}
            <h1>New Header</h1>
            {/*Task 2 */}
            <img src={dog} alt="What the dog doin" />
            {/*Task 3 */}
            <ol>
                <li>FF7 Rebirth</li>
                <li>Persona 3R</li>
                <li>Tekken 8</li>
            </ol>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        First column.
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "blue",
                            }}
                        ></div>
                        Second column.
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
