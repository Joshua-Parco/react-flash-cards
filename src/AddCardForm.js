import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const AddCardForm = (props) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');



  const handleSubmit = (e) => {
    props.addCard({ front, back });
    setFront("");
    setBack("");
  }



  return (
    <Form unstackable onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <Form.Group widths={2}>
        <Form.Input
          // onChange={handleChange}
          // value={contact.name}
          size="small"
          name="front"
          label="front"
          value={front}
          onChange={(e) => {
            setFront(e.target.value);
          }}
          placeholder="Card front"
        />
        <Form.Input
          // onChange={handleChange}
          // value={contact.back}
          onChange={(e) => {
            setBack(e.target.value);
          }}
          size="small"
          value={back}
          name="back"
          label="back"
          placeholder="Card back"
        />
      </Form.Group>
      {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
      <Button style={{ marginTop: "20px" }} type="submit">
        Add Card
      </Button>
    </Form>

  )



};

export default AddCardForm;