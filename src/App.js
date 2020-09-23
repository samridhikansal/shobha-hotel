import React from "react";
//importing components
import InvoiceForm from "./components/invoiceForm/invoiceform";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import Admin from "./components/Admin/Admin";
import SignIn from "./components/Auth/signIn/signIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home message="Welcome to Shobha "></Home>
          </Route>
          <Route path="/admin">
            {" "}
            <Admin></Admin>
          </Route>
          <Route path="/invoice">
            {" "}
            <InvoiceForm></InvoiceForm>
          </Route>
          <Route path="/signin">
            {" "}
            <SignIn></SignIn>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
