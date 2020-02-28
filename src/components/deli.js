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
          <Cell col={3} />
          <Cell col={6}>
            <div className="menu">
              <table id="tablePreview" class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Visits</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Visits</th>
                    <th>Age</th>
                    <th>Country</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Cell>
          <Cell col={3} />
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
