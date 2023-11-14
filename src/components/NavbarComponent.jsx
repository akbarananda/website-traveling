"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import logo from "../assets/img/logo.png";

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TravelingYUK
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/support">Support</Navbar.Link>
          <Navbar.Link href="#">Check Order</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
