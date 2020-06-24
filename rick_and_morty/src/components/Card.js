import React from 'react';
import '../App.css';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.key          = props.key;
    this.name         = props.name;
    this.image        = props.image;
    this.activarModal = props.activarModal
    console.log(props);
  }

  render() {
    return (
      <div className="Card" onClick={() => this.activarModal(this.key)}>
        <div className="Card-imagen">
          <figure>
            <img alt={this.name} src={this.image}/>
          </figure>
        </div>
        <div className="Card-descripcion">
          <div className="Card-name">
            <h3>{this.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;