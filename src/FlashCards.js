import FlashCard from './FlashCard';
import { List } from "semantic-ui-react";
const FlashCards = ({cards, removeCard}) => {
  let renderCards = () => {
    return cards.map((c) => {
      return (
        <FlashCard
        key={c.id}
        {...c}
        removeCard={removeCard}
        />
      );
    });
  };

  return (
    <div>
      <List>{renderCards()}</List>
    </div>
  )
};             

export default FlashCards;