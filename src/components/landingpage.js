import React, { Component } from "react";
import {
  Grid,
  Cell,
  Footer,
  FooterSection,
  FooterLinkList,
  Button
} from "react-mdl";
import logo from "../assets/logo.jpg";
import Bridge from "../assets/Bridge.PNG";
import SheetsCircle from "../assets/SheetsCircle.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
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
          </Cell>

          <Cell phone={12} tablet={12} hideDesktop id="mobileLogo">
            <div className="logoMobile">
              <img src={logo}></img>
            </div>
          </Cell>

          <Cell phone={12} tablet={12} hideDesktop>
            <div className="mobileMenuHome">
              <Button raised>
                <a href="/access">River Access</a>
              </Button>
              <Button raised>
                <a href="/gear">River Gear</a>
              </Button>
              <Button raised>
                <a href="/deli">Deli Menu</a>
              </Button>
              <Button raised>
                <a href="/about">About Us</a>
              </Button>
            </div>
          </Cell>
        </Grid>
        {/* <Footer size="mini">
          <FooterSection type="left" logo="Sheets Country Store">
            <FooterLinkList>
              <a href="/">Help</a>
              <a href="/">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer> */}
      </div>
    );
  }
}

export default Landing;
