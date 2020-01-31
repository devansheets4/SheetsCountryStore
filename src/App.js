import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header fixed>
            <div className="header-phone">
              <h3>336-846-3837</h3>
            </div>
          </Header>
          <Drawer title="Sheets' Store">
            <Navigation>
              <a href="/">Home</a>
              <a href="/access">River Access</a>
              <a href="/gear">Gear</a>
              <a href="/deli">Deli</a>
              <a href="/about">About</a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
