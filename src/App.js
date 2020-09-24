import React from "react";
//importing components
import DisplayInvoice from "./components/invoice/invoiceForm/displayinvoice/displayinvoice";
import GenerateInvoice from "./components/invoice/invoiceForm/invoice/generateInvoice";
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
            <GenerateInvoice></GenerateInvoice>
          </Route>
          <Route path="/admin">
            {" "}
            <Admin></Admin>
          </Route>
          <Route path="/displayinvoice">
            {" "}
            <DisplayInvoice></DisplayInvoice>
          </Route>
          <Route path="/generateinvoice">
            {" "}
            <GenerateInvoice></GenerateInvoice>
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
