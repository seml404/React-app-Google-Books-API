import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

function App() {
  let [booksFound, setBooksFound] = useState("");

  let [userRequest, setUserRequest] = useState("");

  const projectAPI = "AIzaSyBegn1BYkKYId9tsTKsCtjKa1IhDsFK3JM";

  async function searchForBooks(request) {
    let first = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${request}&key=${projectAPI}`
    );
    let res = await first.json();
    console.log(res);
  }

  function submitRequest(event) {
    event.preventDefault();
    if (userRequest) {
      searchForBooks(userRequest);
    }
  }

  function trackRequest(event) {
    let value = event.target.value;
    setUserRequest([value]);
  }

  return (
    <>
      <Container>
        <Form
          onSubmit={(e) => {
            submitRequest(e);
          }}
        >
          <InputGroup
            size="sm"
            className="mb-3"
            onChange={(e) => trackRequest(e)}
          >
            <FormControl
              placeholder="Please, enter the name of the book"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button type="submit">Submit</Button>
        </Form>
        {/* {if()} */}
      </Container>
    </>
  );
}

export default App;
