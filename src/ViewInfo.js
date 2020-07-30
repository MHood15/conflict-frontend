import React from 'react'
import Button from 'react-bootstrap/Button';
import {Container, Col, Row, Image} from 'react-bootstrap';


function ViewInfo(props) {

    let nameGiven = props.nameGiven;

        return(
            <div>
                    <div>
                        <div>
                            {props.conflicts.filter(conflict => conflict.name === nameGiven).map(conflict =>
                                    <div key={conflict.id}>
                                        <Container id='conflict'>
                                            <Row className="justify-content-md-center">
                                                <Col md="auto" className='title'>
                                                    <h2 className ='title1'>{conflict.name}</h2>
                                                </Col>
                                            </Row>
                                        
                                            <Row className = "info">
                                                <Col className="justify-content-md-center articleImage" lg={5}>
                                                    {console.log(conflict.image)}
                                                    <Image src={conflict.image} rounded fluid/>
                                                </Col>

                                                <Col lg={7} className="my-auto">
                                                    <Row className="justify-content-md-center title" >
                                                        <Col md="auto">
                                                            <h4 className ='title1'>Location:</h4>
                                                        </Col>
                                                        <Col md="auto">
                                                            <h4>{conflict.location}</h4>
                                                        </Col>
                                                        <Col md={1}></Col>
                                                        <Col md="auto">
                                                            <h4 className ='title1'>Status:</h4>
                                                        </Col>
                                                        <Col md="auto">
                                                            <h4>{conflict.status}</h4>
                                                        </Col>
                                                    </Row>

                                                    <Row className="justify-content-md-center content">
                                                        <Col md={6}>
                                                            <h3>{conflict.background}</h3>
                                                        </Col>
                                                        <Col md={5} className="my-auto">
                                                            <Row>
                                                                <Col md="auto">
                                                                    <h4 className ='title1'>Killed:</h4>
                                                                </Col>
                                                                <Col md="auto">
                                                                    <h4>{conflict.dead}</h4>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="auto">
                                                                    <h4 className ='title1'>Displaced:</h4>
                                                                </Col>
                                                                <Col md="auto">
                                                                    <h4>{conflict.displaced}</h4>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    <Row className="justify-content-md-center content">
                                                        <Col md="auto">
                                                            <h4 className ='title1'>Duration:</h4>
                                                        </Col>
                                                        <Col md="auto">
                                                            <h4>{conflict.duration}</h4>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>

                                        </Container>
                                    </div>
                            )}
                        </div>
                        <Button id='returnButton' variant='dark' size='lg' onClick={()=>props.setState({...props.state, viewInfo: false, viewHelp: false})}>Return to Map</Button>
                    </div>
                
            </div>
        )
    
}

export default ViewInfo