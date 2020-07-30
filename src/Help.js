import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import {Container, Col, Row, Image, Form} from 'react-bootstrap';
import Map from './Map';
import Confetti from 'react-dom-confetti';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import Cannon from './Cannon.mp3';
import Sound from 'react-sound';


const config = {
    angle: "270",
    spread: 360,
    startVelocity: 40,
    elementCount: "300",
    dragFriction: 0.10,
    duration: 4000,
    stagger: 3,
    width: "15px",
    height: "15px",
    perspective: "600px",
    colors: ["124C07", "#00000", "#62621E", "#4F4F49", "#9A8338", "#38B339"]
  };

class Help extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heights: [],
            age: null,
            height: 0,
            weight: null,
            citizen: null,
            diploma: null,
            tattoos: null,
            qualified: null,
            showNQ: false,
            viewMap: false
        }
    }


    setAge = (event) => {
        this.setState({age: parseFloat(event.target.value)})
    }

    setHeight = (event) => {
        this.setState({height: parseFloat(event.target.value)})
    }

    setWeight = (event) => {
        this.setState({weight: parseFloat(event.target.value)})
    }

    setCitizen = (event) => {
        this.setState({citizen: event.target.value})
    }

    setDiploma = (event) => {
        this.setState({diploma: event.target.value})
    }

    setTattoos = (event) => {
        this.setState({tattoos: event.target.value})
    }

    submitForm = async (event) => {
        event.preventDefault()

        let size= [[58,	131], [59, 136], [60, 141], [61, 145],[62,	150],[63, 155], [64, 160],
        [65, 165],[66,	170],[67,	175],[68, 180],[69, 186],[70, 191],[71,	197],
        [72, 202],[73, 208],[74, 214],[75, 220],[76, 225],[77, 231],[78, 237],[79, 244],[80, 250]]

        let weightAllowed;

        for(let i = 0; i < size.length; i++){
            if(this.state.height === size[i][0]){
                weightAllowed = size[i][1]
            }
        }
        if(this.state.age===null || this.state.height===null|| this.state.citizen===null || this.state.diploma===null || this.state.tattoos===null || this.state.weight===null){
            alert("Please enter all fields")
        }else if(this.state.age < 17 || this.state.age > 39 || this.state.citizen==="no" || this.state.diploma==="no" || this.state.tattoos==="yes" || this.state.weight > weightAllowed){
            await this.setState({qualified: false, showNQ: true})
        }else{
           await this.setState({qualified: true})
        }

    }
   


    render(){
        for(var i = 58; i < 81; i++){
            this.state.heights.push(i);
        }

        return (
            <div>
                
                {this.state.viewMap ? <Map /> :
                <div>
                <Container className="help">
                    <Row>
                    <Col md={5} className="form">
                    <Form>
                        <h2>See if you qualify to join the military</h2>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control placeholder="e.g. 27" onChange={this.setAge}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Height (in inches)</Form.Label>
                            <Form.Control as="select" onChange={this.setHeight}>
                                <option value=""></option>
                                {this.state.heights.map(height => <option value={height}>{height}</option>)}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formHeight">
                            <Form.Label>Weight (in pounds):</Form.Label>
                            <Form.Control placeholder="e.g. 155" onChange={this.setWeight}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Are you a U.S. citizen or legal permanent resident?</Form.Label>
                            <Col>
                                <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                name="citizen"
                                value="yes"
                                onChange={this.setCitizen}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="No"
                                name="citizen"
                                value="no"
                                onChange={this.setCitizen}
                                />
                            </Col>

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Do you have a high school diploma or GED?</Form.Label>
                            <Col>
                                <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                name="diploma"
                                value="yes"
                                onChange={this.setDiploma}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="No"
                                name="diploma"
                                value="no"
                                onChange={this.setDiploma}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Do you have head, face, or neck tattoos?</Form.Label>
                            <Col>
                                <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                name="tattoos"
                                value="yes"
                                onChange={this.setTattoos}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="No"
                                name="tattoos"
                                value="no"
                                onChange={this.setTattoos}
                                />
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.submitForm}>Submit</Button>
                        <div className="caveat">*This is for general purpose use only. Follow-up with a local recruiter to determine your eligibility.</div>
                    </Form>
                    </Col>

<Col>
                    <Col className="donateDiv" md={7}>
                        <h3>Donate Now</h3>
                        <Col>
                            <a className="donate" href="https://www.savethechildren.org/us/what-we-do/where-we-work/africa/mali" target="_blank">Help children in Mali</a>
                        </Col>
                        <Col>
                            <a className="donate" href="https://hhrd.org/new/kashmir" target="_blank">Contribute to the Kashmir Relief Fund</a>
                        </Col>
                        <Col>
                            <a className="donate" href="https://donate.unhcr.org/int/venezuela/~my-donation#" target="_blank">Support Venezuelan families</a>
                        </Col>
                        <Col>
                            <a className="donate" href="https://www.rescue.org/country/yemen" target="_blank">Provide food and medicine to Yemen</a> 
                        </Col>
                        <Col>
                            <a className="donate" href="https://www.unicefusa.org/" target="_blank">Learn more through UNICEF</a>
                        </Col>           
                    </Col>

                    <Col md={8}>
                        <div className="centerContent twitter">
                            <div className="selfCenter standardWidth">
                                <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/Conflicts" options={{height: 450}} />
                            </div>
                        </div>
                    </Col>
                    </Col>
                    </Row>
                </Container>
                <Button className='helpButton' variant='dark' size='lg' onClick={()=>this.setState({viewMap: true})}>Return to Map</Button>
                
                <Confetti className="confetti" active={ this.state.qualified } config={ config }/>

                {this.state.qualified ?
                    
                    <div className="qualified">
                        
                        <h1>Congratulations!</h1>
                        <h3>You are preliminarily qualified to join the U.S. military and help end global conflict.</h3>
                        <h3>If you want more information about joining, please click below:</h3>
                        <Row>
                            <Col>
                                <a className="join" href="https://www.airforce.com/apply-now" target="_blank">
                                        <Image className="joinPic" src="https://vid.alarabiya.net/images/2020/01/07/807215bc-c5ea-409a-80db-6a85cca469c8/807215bc-c5ea-409a-80db-6a85cca469c8_16x9_600x338.jpg" />
                                        <div>U.S. Air Force</div>
                                    </a>
                            </Col>
                            <Col>
                                <a className="join" href="https://www.goarmy.com/learn.html" target="_blank">
                                    <Image className="joinPic" src="https://www.armytimes.com/resizer/_2-zKlIbuCm-Rf7gtJBTwFVN56o=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/GCSPIAJALFEHBFXNZPMOJ5N26A.jpg" />
                                    <div>U.S. Army</div>
                                </a>
                            </Col>
                            <Col>
                                <a className="join" href="https://rmi.marines.com/request-information" target="_blank">
                                <Image className="joinPic" src="https://images03.military.com/sites/default/files/media/holidays/navy-birthday/2015/10/amphibiousassaultshipusskearsarge.jpg" />
                                    <div>U.S. Marines</div>
                                </a>
                            </Col>
                            <Col>
                                <a className="join" href="https://www.navy.com/start?activity=1228855" target="_blank">
                                <Image className="joinPic" src="https://nypost.com/wp-content/uploads/sites/2/2019/02/190214-cobra-blood-50.jpg?quality=80&strip=all" />
                                    <div>U.S. Navy</div>
                                </a>
                            </Col>
                        </Row>
                        <Button className='joinButton' variant='dark' size='lg' onClick={()=>this.setState({qualified: null, showNQ: false})}>No thanks, terrorists are scary</Button>
                        <Sound
                            url={Cannon}
                            playStatus={Sound.status.PLAYING}
                            playFromPosition={300 /* in milliseconds */}
                        />
                    </div>

                    : this.state.showNQ ? 
                        <div className="qualified">
                            <h2>Sorry, but this prelimary screener indicates that you are not currently eligible to serve in the U.S. military. </h2>
                            <Button className='joinButton' variant='dark' size='lg' onClick={()=>this.setState({qualified: null, showNQ: false})}>Thanks, I'll find another way to make a difference</Button>
                        </div>
                        
                        : null }
                    
                </div>
    }
            </div>
        )
    }

}

export default Help;

