

import { Button, Container } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsFillTelephoneFill} from "react-icons/bs";
import {BiColor, BiCopyright} from "react-icons/bi"
import {SiGmail} from "react-icons/si"
import { icons } from "react-icons";
import { Link } from "react-router-dom";


export default function FooterComponent() {
    const happy = true; // or whatever value is appropriate
    return (

        <div >                
            <Container fluid className="c-footermainclass" style={{backgroundColor:"#DFCCFB"}}>
                <Row>
                    <Col xs={12}  md={4} lg={4} xl={4}>
                    <h3>Home Rental System</h3>
                    <hr></hr>
                        <p>
                            We are here for you to provide  your dream house or live comfortably in PG or flat. So, search your PG, flat and house for living
                        </p>
                    </Col>
                    <Col xs={12}  md={4} lg={4} xl={4}>
                    <h3>Quick Links</h3>
                    <hr></hr>
                    <ul class="list-unstyled">
            <li class="mb-2"><a class="text-color" href="/aboutus">About Us</a></li>
            <li class="mb-2"><a class="text-color" href="/contactus">Contact us</a></li>
          </ul>
                    </Col>

                    <Col xs={12}  md={4} lg={4} xl={4}>
                    <h4><b>headOffice</b></h4>
                            <hr></hr>
                            <li class="mb-2"><a href="#" class="text-color" title="">Deccan Gymkhana, Pune, postal code: 411016</a></li>
                            <br></br>
                            <h5><span><BsFillTelephoneFill/></span>&ensp;&ensp;&ensp;+91-7845967852</h5>
                            <h5><span><SiGmail/></span>&ensp;&ensp;&ensp;homerental@hrs.com</h5>
                            
                    </Col>

                 
                    <hr></hr>
                </Row>

                <Row>
                <Col xs={12}  md={12} lg={12} xl={12}> 
                <div class="copyright py-2 bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 text-sm-left text-center">
          <p class="mb-0">© Copyright
            <script>
              var CurrentYear = new Date().getFullYear()
              document.write(CurrentYear)
            </script> 
             Design by <a href="#">HomeRentalSystem</a></p> . All Rights Reserved By HomeRentalSystem.
        </div>
        <div class="col-sm-5 text-sm-right text-center">
          <ul class="list-inline">
          <div className="c-footericon">
                            <Link to=""><BsFacebook size="20px"/></Link> &nbsp;
                            <Link to="https://www.instagram.com/"style={{color:"red"}} ><BsInstagram size="20px"/></Link> &nbsp;
                              <Link to="" style={{color:"skyblue"}}><BsLinkedin size="20px" /></Link> &nbsp;
                             <Link to="" style={{color:"blue"}}><BsTwitter size="20px"/>  </Link>
                            </div>
        </ul>
        </div>
      </div>
    </div>
  </div>
</Col>
                </Row>
            </Container>
        </div>
    )
}