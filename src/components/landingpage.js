import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";
import logo from "../assets/logo.jpg";
import Bridge from "../assets/Bridge.PNG";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          {/* <Cell col={12}>
            <div className="title">
              <h1>Sheets' Country Store</h1>
              <p>
                <a href="/">Home</a> | <a href="/access">River Access</a> |{" "}
                <a href="/gear">Gear</a> | <a href="/deli">Deli</a> |{" "}
                <a href="/about">About Us</a>
              </p>
            </div>
          </Cell> */}

          <Cell col={4} phone={12}>
            <div className="logo">
              <img src={logo}></img>
            </div>
          </Cell>
          <Cell col={8} phone={12}>
            <div className="logo2">
              <img src={Bridge}></img>
            </div>
          </Cell>
          {/* <Cell col={3}></Cell> */}

          <Cell col={12}>
            <div className="titleHome">
              <p>
                <a href="/">Home</a> &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
                <a href="/access">River Access</a> &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
                <a href="/gear">Gear</a> &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
                <a href="/deli">Deli</a> &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
                <a href="/about">About Us</a>
              </p>
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
