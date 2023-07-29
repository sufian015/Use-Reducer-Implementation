export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "book is added",
    };
  }
  if (action.type === "REMOVE") {
    const fillteredBooks = [...state.books].filter((book)=>book.id !== action.payload);

    return {
      ...state,
      books: fillteredBooks,
      isModalOpen: true,
      modalText: "book is removed",
    };
  }
  return state;
};

