import { useState } from "react";
const { Card, Button } = require("semantic-ui-react")

const FlashCard = ({ id, front, back, removeCard }) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <Card>
      <Card.Content>
        <Card.Description onClick={() => setShowFront(!showFront)} style={{paddingBottom: "60px"}}>
          { showFront ? front : back }
        </Card.Description>
        <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button basic color='red' onClick={() => removeCard(id)}>
                 Delete
              </Button>
            </div>
          </Card.Content>
      </Card.Content>
    </Card>
  );
};


export default FlashCard;                                   