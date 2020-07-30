import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import ViewInfo from './ViewInfo';
import {Container, Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Memes from './Memes';
import Help from './Help';
import ReactTooltip from "react-tooltip";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markersUnchanging = [
    {name: "Criminal Violence in Mexico", coordinates: [-102.0000, 23.000] },
    {name: "Boko Haram", coordinates: [8.6753, 9.0820] },
    {name: "Violence in the Central African Republic", coordinates: [20.9394, 6.6111] },
    {name: "Violence in the Democratic Republic of the Congo", coordinates: [23.7587, -3.0383] },
    {name: "Civil War in South Sudan", coordinates: [31.3070, 6.8770] },
    {name: "Al-Shabab", coordinates: [46.1996, 5.1521] },
    {name: "Civil War in Libya", coordinates: [17.2283, 26.3351] },
    {name: "Instability in Egypt", coordinates: [31.2357, 30.0444] },
    {name: "Conflict in Ukraine", coordinates: [31.1656, 49.3794] },
    {name: "Nagorno-Karabakh Conflict", coordinates: [46.6551, 39.7962] },
    {name: "Political Instability in Lebanon", coordinates: [35.8623, 33.8547] },
    {name: "Turkish Territorial Dispute", coordinates: [35.2433, 38.9637] },
    {name: "Israeli-Palestinian Conflict", coordinates: [34.3088, 31.3547] },
    {name: "Civil War in Syria", coordinates: [38.9968, 34.8021] },
    {name: "Political Instability in Iraq", coordinates: [43.6793, 33.2232] },
    {name: "Islamist Militancy in Pakistan", coordinates: [69.3451, 30.3753] },
    {name: "Tensions in the East China Sea", coordinates: [125.9152, 30.3953] },
    {name: "Rohingya Crisis", coordinates: [95.9560, 21.9162] }
];

const markersWorsening = [
    {name: "Instability in Venezuela", coordinates: [-66.9036, 10.4806] },
    {name: "Destabilization of Mali", coordinates: [-2.0000, 17.5000] },
    {name: "Civil War in Yemen", coordinates: [48.5164, 15.5527] },
    {name: "Iranian-US Conflict", coordinates: [53.6880, 32.4279] },
    {name: "War in Afghanistan", coordinates: [67.7100, 33.9391] },
    {name: "Conflict in Kashmir", coordinates: [76.5762, 33.7782] },
    {name: "Territorial Disputes in the South China Sea", coordinates: [114.4048, 15.4881] },
    {name: "North Korea Crisis", coordinates: [127.5101, 40.3399] }
];
  

const Map = ({ setTooltipContent }) => {
    const [state, setState] = useState({
        viewInfo: false,
        viewMemes: false,
        viewHelp: false,
        name: "",
        conflicts: [], 
        loaded: true
    })

    const [content, setContent] = useState("");
    

    useEffect(() => {
        async function componentDidMount() {
            const response = await fetch('/conflicts');
            const body = await response.json();
            setState({ 
                ...state,
                conflicts: body 
            });
        }
        componentDidMount();
    }, [])


    return (
    <div>
        {state.viewMemes ? <Memes /> :
        state.viewHelp ? <Help setState={setState} state={state}/> :
        state.viewInfo ? <ViewInfo setState={setState} state={state} nameGiven={state.name} conflicts = {state.conflicts}/> : 
            <div>
                <ComposableMap className="map"  data-tip="" projectionConfig={{scale: 175}}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#000000"
                                stroke="darkgray"
                                
                            />
                        ))
                        }
                    </Geographies>

                    {markersUnchanging.map(({ name, coordinates}) => (
                        <Marker data-tip="" className="pointer" key={name} coordinates={coordinates} onClick={()=>{
                                setContent("");
                                setState({...state, viewInfo: true, name: name});
                            }}
                            onMouseEnter={() => {
                                setContent(`${name}`);
                            }}
                            onMouseLeave={() => {
                                setContent("");
                            }}
                            style={{
                                default: {
                                fill: "#D6D6DA",
                                outline: "none"
                                },
                                hover: {
                                fill: "#F53",
                                outline: "none"
                                },
                                pressed: {
                                fill: "#E42",
                                outline: "none"
                                }
                            }}
                        >
                        <circle r={3} fill="#FFA500" />
                        </Marker>
                    ))}

                    {markersWorsening.map(({ name, coordinates}) => (
                        <Marker data-tip="" key={name} className="pointer" coordinates={coordinates} onClick={()=>{
                            setContent("");
                            setState({...state, viewInfo: true, name: name});
                        }}
                            onMouseEnter={() => {
                                setContent(`${name}`);
                            }}
                            onMouseLeave={() => {
                                setContent("");
                            }}
                            style={{
                                default: {
                                fill: "#D6D6DA",
                                outline: "none"
                                },
                                hover: {
                                fill: "#F53",
                                outline: "none"
                                },
                                pressed: {
                                fill: "#E42",
                                outline: "none"
                                }
                            }}
                        >
                        <circle r={3} fill="#F00" />
                        </Marker>
                    ))}

                </ComposableMap>
                <ReactTooltip>{content}</ReactTooltip>


                <Container id='legend'>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className ='font-weight-bold'>Conflict Status</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <span className='dotWorse'></span>
                        </Col>
                        <Col md="auto">Worsening</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <span className='dotUnchange'></span>
                        </Col>
                        <Col md="auto">Unchanging</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <span className='dotImprove'></span>
                        </Col>
                        <Col md="auto">Improving</Col>
                    </Row>
                </Container>

                <Button className='helpButton' variant='dark' size='lg' onClick={()=>setState({...state, viewHelp: true})}>This is depressing, how can I help?</Button>
                <Button className='memeButton' variant='dark' size='lg' onClick={()=>setState({...state, viewMemes: true})}>This is depressing, show me something else</Button>
            </div>
        
    }
    </div>
    
    );

 
}

export default memo(Map);
