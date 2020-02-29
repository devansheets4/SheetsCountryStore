import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";
import hat from "../assets/hat.jpg";
import shoes from "../assets/shoes.jpg";
import soap from "../assets/soap.jpg";
import SheetsCircle from "../assets/SheetsCircle.png";
import shirtrack from "../assets/shirtrack.jpg";
import blackshirt from "../assets/blackshirt.jpg";
import whiteshirt from "../assets/whiteshirt.jpg";

class Gear extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="secondary-grid">
          <Cell col={3} hidePhone hideTablet>
            <div className="logo">
              <img src={SheetsCircle}></img>
            </div>
          </Cell>
          <Cell col={9} hidePhone hideTablet>
            <div className="titleHome">
              <p>
                <a href="/">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/access">River Access</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/gear">Outfitters</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/deli">Deli</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/about">About</a>
              </p>
            </div>
            <hr></hr>
            <div className="riverGear">
              <p> CLOTHING & RIVER GEAR </p>
            </div>
          </Cell>
          <Cell col={12} hidePhone hideTablet>
            <hr></hr>
          </Cell>

          <Cell col={4} hideTablet hidePhone>
            <div className="shirts">
              <img src={blackshirt}></img>
            </div>
          </Cell>

          <Cell col={4} hideTablet hidePhone>
            <div className="shirts">
              <img src={shirtrack}></img>
            </div>
          </Cell>

          <Cell col={4} hideTablet hidePhone>
            <div className="shirts">
              <img src={whiteshirt}></img>
            </div>
          </Cell>
        </Grid>

        <Footer size="mini">
          <FooterSection type="left" logo="Sheets Country Store">
            <FooterLinkList>
              <a href="/">Help</a>
              <a href="/">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default Gear;
