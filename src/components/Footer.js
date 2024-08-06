import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Maplogo from "../images/imagev.PNG";
import Megamindlogo from "../images/megamind-logo.png";
import FlightLogo from "../images/flight.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import About from "./about/About";
function Footer() {
  // function sayHello() {
  //   alert("You clicked me!");
  // }

  // Function from back to top
  const backTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <>

      <BrowserRouter>
        <Container fluid>
          <Row
            className="py-5 border-t"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={6} md={4}>
              <div className="">
                <NavLink
                  className=""
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                  })}
                >
                  <img
                    src={Megamindlogo}
                    className="mobile-bottom"
                    alt="Megamind logo"
                  />
                </NavLink>
                <div className="padding-top-5 pb-2">
                  <NavLink to="https://www.facebook.com/megamindcon/" target="_blank" className="fa-brands fa-facebook mega-icon"></NavLink>
                  <NavLink to="https://www.instagram.com/megamindconsultants/" target="_blank" className="fa-brands fa-instagram mega-icon"></NavLink>
                  <NavLink to="https://in.linkedin.com/company/megamindcon" target="_blank" className="fa-brands fa-linkedin mega-icon"></NavLink>
                  <NavLink to="https://www.youtube.com/channel/UCkSuejbTdz5Nn3Bf4x8ADCQ" target="_blank" className="fa-brands fa-youtube mega-icon"></NavLink>
                  <NavLink to="https://twitter.com/megamindcon" target="_blank" className="fa-brands fa-x-twitter mega-icon">  <FontAwesomeIcon  /> </NavLink>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="paras">
              <h5 className="fw-bold text-black">DELHI OFFICE</h5>
              <p className="fw-bold p-para pt-2"> Megamind Consultants</p>
              <p className="fw-bold p-para"> info@megamindonline.com</p>
              <p className="fw-bold p-para">
                2nd Floor, 49 Ring Road, Lajpat Nagar-lll,
                <br /> New Delhi-110024, India
              </p>
              <p className="fw-bold p-para"> +91-888-225-5001</p>
            </Col>
            <Col sm={12} md={4}>
              <NavLink
                className="navbar-brand"
                target="_blank"
                to="https://maps.app.goo.gl/AgtnNt6BQKfGjSzh8"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
              >
                <img src={Maplogo} className="w-100" alt="logo" />
              </NavLink>
            </Col>
          </Row>

          <Row
            className="py-5 border-top"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={6} md={2}>
              <ul className="list-style-none p-0">
                <li>
                  <a className="list-style" href="/about" exact>
                    {"About Megamind "}
                  </a>
                </li>

                {/* <li>
                  <NavLink className="list-style" to="./">
                    {"  Work with us "}
                  </NavLink>
                </li> */}
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <ul className="list-style-none p-0">
                <li>
                  <a className="list-style" href="./" exact>
                    {"Home "}
                  </a>
                </li>

                <li>
                  <a className="list-style" href="/Ielts" exact>
                    {"IELTS Prepartion "}
                  </a>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Premium University Counselling"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Human Resource"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Student Testimonials "}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" to="/">
                    {"Registration Form "}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Visa Services"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" target="_blank" to="/blog">
                    {"Blog"}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Consultant Study in Australia "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Consultant Study in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Consultant Study in United Kingdom"}
                  </NavLink>
                </li> */}
              </ul>
            </Col>
            <Col sm={6} md={2}>
              <ul className="list-style-none p-0">
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Study Abroad "}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=GERMANY" exact>
                    {" Study in Germany "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=CANADA" exact>
                    {" Study in Canada "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=Australia" exact>
                    {" Study in Australia "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=UK" exact>
                    {"Study in United Kingdom "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=IRELAND" exact>
                    {" Study in Ireland "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=New Zealand" exact>
                    {" Study in New-Zealand "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" target="_blank" to="/country?code=USA" exact>
                    {"Study in USA"}
                  </NavLink>
                </li>



              </ul>
            </Col>

            {/* Part to be removed from the footer */}
            {/* <Col sm={6} md={1}>
              <ul className="list-style-none p-0">
                <li>
                  <NavLink className="list-style" to="/">
                    {"Tests "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"IELTS"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"GMAT"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" GRE "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" SAT"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"TOEFL "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" PTE"}
                  </NavLink>
                </li>
              </ul>
            </Col> */}

            <Col sm={12} md={2}>
              <ul className="list-style-none p-0">
                <li>
                  <NavLink className="list-style" to="https://franchise.megamindonline.com/">
                    {"Franchise "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="https://www.megamindonline.com/financeservices">
                    {" Financial Services"}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"MBA in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Top Colleges in Toronto "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Universities in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Colleges in Toronto "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" Colleges in Vancouver "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {" 2 Years Programs in Canada "}
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"MBA in UK"}
                  </NavLink>
                </li> */}
              </ul>
            </Col>

            <Col sm={12} md={2}>
              <ul className="list-style-none">
                {/* <li>
                  <NavLink className="list-style" to="/">
                    {"Other Links"}
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="list-style" exact target="_blank" to="/privacy-policy">
                    {" Privacy Policy"}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"Terms & Conditions "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"   Responsible Disclosure Policy "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {" EEO Policy "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-style" to="/">
                    {"Sitemap"}
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>

          <Row
            className="border-top pt-3"
            style={{ width: "80%", margin: "auto" }}
          >
            <Col sm={12} md={8}>
              <p style={{ lineHeight: "54px" }} className="p-para">
                @Copyright 2024. Megamind Consultants All rights reserved. |
                Powered by <NavLink className="list-style" to="https://www.digitalxplode.com/">DigitalXplode</NavLink>
              </p>
            </Col>

            <Col sm={12} md={4}>
              <a
                onClick={backTop}
                className="btn btn-pad2 btn-sm btn-outline-primary"
              >
                {"Back on Top "}
                <BsFillArrowUpCircleFill
                  style={{ fontSize: "22px", marginLeft: "10" }}
                />
              </a>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="">
            <Col sm={12} md={12} className="p-0">
              <div class="webfooter_slideshow__d1IHp">
                <img
                  src={FlightLogo}
                  alt=""
                  srcset=""
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    height: "88px",
                    zIndex: "1",
                  }}
                />
                <div class="webfooter_images__JoxIN"></div>
              </div>
            </Col>
          </Row>
        </Container>

        <Routes>
          <Route exact path="/about" component={About} />
        </Routes>
      </BrowserRouter>

      {/* bottom call and whatsapp CTA */}
      <Col sm={12} className="bottom-fixed-links">
        <li><a className="bottomPatti" href="https://api.whatsapp.com/send/?phone=%2B918882255001&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i><span>Connect</span></a></li>
        <li><a className="bottomPatti" href="tel:+919990737589"><i class="fa-solid fa-phone"></i><span>Call us</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/course-finder/"><i class="fa-solid fa-magnifying-glass"></i><span>Course finder</span></a></li>
        <li><a className="bottomPatti" href="./#top"><i class="fa-solid fa-earth-africa"></i><span>Countries</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/Ielts"><i class="fa-solid fa-plane-up"></i><span>IELTS</span></a></li>
        <li><a className="bottomPatti" href="https://megamindonline.com/about"><i class="fa-solid fa-people-group"></i><span>About Us</span></a></li>
      </Col>
    </>
  );
}
export default Footer;
