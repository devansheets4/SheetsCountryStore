import React, { Component } from "react";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";
import owners from "../assets/owners.jpg";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="secondary-grid">
          <Cell col={12}>
            <div className="title">
              <h1>ABOUT US</h1>
              <p>
                <a href="/">Home</a> | <a href="/access">River Access</a> |{" "}
                <a href="/gear">Gear</a> | <a href="/deli">Deli</a> |{" "}
                <a href="/about">About Us</a>
              </p>
            </div>
          </Cell>
          <Cell col={1}></Cell>
          <Cell col={5}>
            <div className="owners">
              <img src={owners} alt="owners" />
            </div>
          </Cell>
          <Cell col={5}>
            <div className="owners2">
              <p>
                WE ARE A FAMILY OWNED AND OPERATED CONVENIENCE & RIVER OUTFITTER
                STORE ON THE BANKS OF THE NATIONALLY RECOGNIZED{" "}
                <span id="newriver">NEW RIVER</span> IN JEFFERSON, NORTH
                CAROLINA. WE STOCK ALL OF THE NECESSITIES NEEDED TO MAKE YOUR
                NEXT RIVER RUN SUCCESSFUL. INNER TUBES, KAYAKS, COOLERS, ICE,
                WATER SHOES, WATERPROOF PHONE BOXES, SUNSCREEN. YOU NAME, IT WE
                HAVE IT! AND IF WE DON'T, WE WILL DO OUR BEST TO HAVE IT FOR YOU
                NEXT TIME! DON'T FORGET TO FILL UP IN OUR DELI! WE SERVE PIZZA,
                COLD CUT SANDWICHES, BBQ, HOT DOGS, NACHOS, CORN DOGS, AND MORE!
                STOP IN AND SEE US ON YOUR NEXT VISIT TO THE MOUNTAINS OR YOUR
                NEXT CANOE OR KAYAKING TRIP. WE’D LOVE TO SEE YOU!
              </p>
            </div>
          </Cell>
          <Cell col={1} />
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

export default About;
