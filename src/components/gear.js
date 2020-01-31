import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";
import hat from "../assets/hat.jpg";
import shoes from "../assets/shoes.jpg";
import soap from "../assets/soap.jpg";

class Gear extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="secondary-grid">
          <Cell col={12}>
            <div className="title">
              <h1>RIVER GEAR</h1>
              <p>
                <a href="/">Home</a> | <a href="/access">River Access</a> |{" "}
                <a href="/gear">Gear</a> | <a href="/deli">Deli</a> |{" "}
                <a href="/about">About Us</a>
              </p>
            </div>
          </Cell>

          <Cell col={3}>
            <div className="gear1">
              <img src={hat}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear2">
              <img src={shoes}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear3">
              <img src={soap}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear3">
              <img src={hat}></img>
            </div>
          </Cell>

          <Cell col={3}>
            <div className="gear1">
              <img src={shoes}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear2">
              <img src={hat}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear3">
              <img src={soap}></img>
            </div>
          </Cell>
          <Cell col={3}>
            <div className="gear3">
              <img src={hat}></img>
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
