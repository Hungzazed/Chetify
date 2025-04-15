import React, { useState } from "react";
import "../css/Dialog.css";
import { Carousel, Modal, Button } from "react-bootstrap";
import welcomeImage2 from "../assets/Image 73.png";
import welcomeImage3 from "../assets/Image 93.png";

const slides = [
  {
    title: "Discover Chefify",
    description:
      "Easy and delicious cooking instructions right here. Start exploring now! Start exploring now!",
    image: welcomeImage2,
  },
  {
    title: "Cook Like a Pro",
    description:
      "Learn from expert chefs and master the art of cooking with our detailed recipes.",
    image: welcomeImage2,
  },
  {
    title: "Join Our Community",
    description:
      "Share your recipes, connect with other food lovers, and explore new cuisines!",
    image: welcomeImage3,
  },
];

const Dialog = ({ isOpen, onClose }) => {
  return (
    <Modal
      show={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="d-flex justify-content-center align-items-center flex-column">
        <Carousel className="h-100 pb-3">
          {slides.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                style={{width: "100%", height: "480px"}}
                src={item.image}
                alt={item.title}

              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button onClick={onClose}
          style={{backgroundColor: "transparent", color: "#f44b86", width: "400px", outline: "none", border: "none"}}
        >Skip</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Dialog;