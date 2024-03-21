import { Badge, Button, Container, Form, InputGroup } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = event.target.elements.title.value;
    const newAuthor = event.target.elements.author.value;
    const isFavorite = event.target.elements.favorite ? event.target.elements.favorite.checked : false;
    const bookTitle = isFavorite ? '★ ' + newBook : newBook;
    setBooks([...books, bookTitle]);
    setAuthors([...authors, newAuthor]);
    event.target.reset();
  };

  return (
    <>
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text>🔍</InputGroup.Text>
          <Form.Control/>
        </InputGroup>
        <h3>A list of Books</h3>
        <nav>
          <div className="container border d-flex justify-content-between align-items-center">
            <p>Life of Pi</p>
            <Badge bg="secondary">Davan</Badge>
          </div>
          <div className="container border d-flex justify-content-between align-items-center">
            <p>★ Học code today</p>
            <Badge bg="secondary">Fpt</Badge>
          </div>
          <div className="container border d-flex justify-content-between align-items-center">
            <p>★ Learn Angular by example</p>
            <Badge bg="secondary">Fpt-Aptech</Badge>
          </div>
          <div className="container border d-flex justify-content-between align-items-center">
            <p>Họ nhà trai</p>
            <Badge bg="secondary">Nguyễn Anh Tú</Badge>
          </div>
          <div className="container border d-flex justify-content-between align-items-center">
            <p>★ Đôi mắt có lửa</p>
            <Badge bg="secondary">Nguyễn Hùng Sơn</Badge>
          </div>
          {books.map((book, index) => (
            <div key={index} className="container border d-flex justify-content-between align-items-center">
              <p>{book}</p>
              <Badge bg="secondary">{authors[index]}</Badge>
            </div>
          ))}
        </nav>
        <h3>Add a new Book</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" name="title"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control required type="text" name="author"/>
          </Form.Group>
          <Form.Group>
            <Form.Check label="Favorite" name="favorite"/>
          </Form.Group>
          <Button type="submit">+ Add</Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
