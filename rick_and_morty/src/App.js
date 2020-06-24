import React from 'react';
import './App.css';
import api from './lib/api';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalActivo          : false,
      personajes           : [],
      personajeSeleccionado: {}
    }
  }

  activarModal(id) {

    let personaje = this.state.personajes.filter(personaje => personaje.id === id)[0];

    this.setState({
      modalActivo          : true,
      personajeSeleccionado: personaje
    })
  }

  desactivarModal() {
    this.setState({
      modalActivo: false,
      personaje  : {}
    })
  }

  componentDidMount() {
    api.getAllCharacters()
      .then(res => {
        this.setState({personajes: res})
      })
      .catch(e => console.error(e))
  }

  RenderCards(p) {
    const {id, name, image} = p;

    return (
      <div key={id} className="Card" onClick={(e) => this.activarModal(id)}>
        <div className="Card-imagen">
          <figure>
            <img src={image} alt={name}/>
          </figure>
        </div>
        <div className="Card-descripcion">
          <div className="Card-name">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {modalActivo, personajes} = this.state;
    const cards                     = personajes.map(p => this.RenderCards(p));

    return (
      <div className="App">
        <div className="App-contenedor">
          <h1>Rick and Morty</h1>
          <div className="Cards-contenedor">
            {cards}
          </div>
          {
            modalActivo
            && (
              <div className="Modal" onClick={e => this.desactivarModal()}>
                <div className="Card-detalle">
                  <div className="Card-imagen">
                    <figure>
                      <img src={this.state.personajeSeleccionado.image} alt=""/>
                    </figure>
                  </div>
                  <div className="Card-detalle-descripcion">
                    <div className="descripcion">
                      <h3>{this.state.personajeSeleccionado.name}</h3>
                      <div className="caracteristica">
                        <p>Status</p>
                        <p className="caracteristica-valor">
                          {this.state.personajeSeleccionado.status}
                        </p>
                      </div>
                      <div className="caracteristica">
                        <p>Especie</p>
                        <p className="caracteristica-valor">
                          {this.state.personajeSeleccionado.species}
                        </p>
                      </div>
                      <div className="caracteristica">
                        <p>Género</p>
                        <p className="caracteristica-valor">
                          {this.state.personajeSeleccionado.gender}
                        </p>
                      </div>
                      <div className="caracteristica">
                        <p>Origen</p>
                        <p className="caracteristica-valor">
                          {this.state.personajeSeleccionado.origin.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;