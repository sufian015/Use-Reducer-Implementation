import React, { useState, useReducer } from "react";
import { reducer } from "./actionReducer";

const booksData = [
  { id: 1, name: "hajar bochor dhore" },
  { id: 2, name: "bela furobar agey" },
  { id: 3, name: "abar bodlabo" },
];

const initialState= {
  books: booksData,
  isModalOpen: false,
  modalText: "",
}

// modal component

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};



const UseReducer = () => {
  // const [books, setBooks] = useState(booksData);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalText, setModalText] = useState('');

  const [bookState, dispatch] = useReducer(reducer,initialState);

  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };

    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
    // setBooks((prevBook)=>{
    //   const newBook={id:new Date().getTime().toString(),name:bookName}
    //   return [...prevBook,newBook]
    // })
    // setIsModalOpen(true);
    // setModalText('Books is added')
    // setBookName('')
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h2>Booklist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Books</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;

        return (
          <li key={id}>
            {name}{" "}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducer;
