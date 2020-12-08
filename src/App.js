import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  Container,
  Header,
} from "semantic-ui-react";
import FlashCards from "./FlashCards";
import AddCardForm from "./AddCardForm";

class App extends React.Component {
  state = {
    cards: [
      { id: 1, front: "What is 1 + 1?", back: "2, ya dummy"},
      { id: 2, front: "What is 1 + 2?", back: "3, ya dummy"},
      { id: 3, front: "What is 1 + 3?", back: "4, ya dummy"},
    ],
    showFront: true,
  };
  
  handleClick = (id) => {
    
  }; 

  deleteCard = (id) => {
    let cards = this.state.cards.filter((card) => card.id !== id);
    this.setState({ cards });
  };

  addCard = (cardObj) => {
    let newCard = {
      id: Math.random(),
      front: cardObj.front,
      back: cardObj.back,
    }

    let updatedCards = [...this.state.cards, newCard];
    this.setState({ cards: updatedCards });

  }
  
  render() {
    const { cards, showFront } = this.state;
    return (
      <Container>
        <Header as="h2">Flash Card App</Header>
        <AddCardForm
          addCard={this.addCard}
        />

        <FlashCards 
          cards={cards}
          removeCard = {this.deleteCard}
        />
      </Container>
    );
  }
}

export default App;
