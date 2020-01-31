import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";

class Deli extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="secondary-grid">
          <Cell col={12}>
            <div className="title">
              <h1>DELI MENU</h1>
              <p>
                <a href="/">Home</a> | <a href="/access">River Access</a> |{" "}
                <a href="/gear">Gear</a> | <a href="/deli">Deli</a> |{" "}
                <a href="/about">About Us</a>
              </p>
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

export default Deli;
