import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import BasicTable from "./containers/ListCreatedSkin";
import BasicTable2 from "./containers/ListSkins";
import CreateSkin from "./containers/CreateSkin";
import ModifySkin from "./containers/ModifySkin";
import DeleteSkin from "./containers/DeleteSkin";
import SignIn from "./containers/Signin";

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/listCreatedSkinCondition" component={BasicTable} />
          <Route path="/listAllSkinCondition" component={BasicTable2} />
          <Route path="/CreateSkinCondition" component={CreateSkin} />
          <Route path="/ModifySkinCondition" component={ModifySkin} />
          <Route path="/deleteSkinCondition" component={DeleteSkin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;