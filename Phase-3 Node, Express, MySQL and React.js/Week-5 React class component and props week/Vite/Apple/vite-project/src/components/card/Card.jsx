import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    let { name, email, phone, color } = this.props;
    return (
      <div className={`container ${color}`}>
        <h3>Evangadi INC. </h3>
        {name && <p>Name: {name}</p>}
        {email && <p>Email:{email}</p>}
        {phone && <p>Phone: {phone}</p>}
      </div>
    );
  }
}
export default Card;
