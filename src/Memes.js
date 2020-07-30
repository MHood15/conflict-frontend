import React, {
    useState
} from 'react'
import Map from './Map';
import Button from 'react-bootstrap/Button';
import {Container, Col, Image} from 'react-bootstrap';

function Memes(props) {
    const [state, setState] = useState({
        viewMap: false
    })

    return (
        <div>
            {state.viewMap ? <Map /> :
                <div>
                    <Container>
                        <Col className="justify-content-md-center">
                            <h2 className="memeTitle">20 memes to remember what it was like when WWIII was our only problem</h2>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>1. And it never got better.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-40-memes.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>2. We all regret that it didn't.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-29.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>3. Back in the good ol' days, when WWIII was our only problem...</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-2.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>4. Not today USA, not today.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-7.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>5. Remember a little something called WWII? You owe us.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-5.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>6. He can't leave until X Æ A-Xii is old enough to space travel. </h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-32.png" fluid/>
                        </Col>
                        
                        <Col className="justify-content-md-center">
                            <h3>7. TFW</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-36.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>8. Guess who just decided they want to go to college?</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-9.png" fluid/>
                        </Col>
                        
                        <Col className="justify-content-md-center">
                            <h3>9. The ostrich was just a cover up for the T-Rex herd in the other room.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-18.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>10. Only if I can be one of those tree-climbing goats.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-22.png" fluid/>
                        </Col>
                        
                        <Col className="justify-content-md-center">
                            <h3>11. We had no idea what was coming.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-35.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>12. No comment.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-13.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>13. Great-Grandpa is strapping in for war.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-20.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>14. 2020 is providing plenty of opportunities for that.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-33.png" fluid/>
                        </Col>
                        <Col className="justify-content-md-center">
                            <h3>15. And we thought it would be because of WWIII...</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-27.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>16. Twitter is like a textbook for the present.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-19.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>17. Third time's the charm?</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://ruinmyweek.com/wp-content/uploads/2020/01/ww3-is-the-first-meme-of-2020-39-ww3-memes-23.png" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>18. A classic.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhzMMUcl9_BsioOvOkuA4Ryndd0ir7op7BcA&usqp=CAU" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>19. It honestly might still be on fire, I'm not sure.</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://64.media.tumblr.com/1798a65fed7efbb9f899ced9a08190b3/482f74a9c5883b0f-0b/s640x960/ea7432c00676cbc5040e9738c3208fa05211a1e1.jpg" fluid/>
                        </Col>

                        <Col className="justify-content-md-center">
                            <h3>20. So this has all just been a delaying tactic?</h3>
                        </Col>
                        <Col className="justify-content-md-center" md={12}>
                                <Image className="meme" src="https://images7.memedroid.com/images/UPLOADED630/5ebc0bea0db81.jpeg" fluid/>
                        </Col>

                    </Container>    
                    <Button className='memeButton' variant='dark' size='lg' onClick={()=>setState({viewMap: true})}>Return to Map</Button>
                </div>
            }
        </div>
    )
}

export default Memes