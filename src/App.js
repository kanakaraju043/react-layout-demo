import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="sidenav"> SideNav</div>
      <div className="content">Content</div>
      <div className="aside">Aside</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
