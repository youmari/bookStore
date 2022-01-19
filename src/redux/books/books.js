/* eslint-disable max-len */

import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nxoUcOAchjPBlXPUHhlw/books';

const initialState = {
  isLoading: false,
  onSuccess: '',
  onFailure: '',
  books: [],
};
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const GET_BOOK_SUCCESS = 'bookStore/books/GET_BOOK_SUCCESS';
const GET_BOOK_FAILURE = 'bookStore/books/GET_BOOK_FAILURE';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const REMOVE_BOOK_SUCCESS = 'bookStore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'bookStore/books/REMOVE_BOOK_FAILURE';

export const addnewBookToList = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBook = (payload) => async (dispatch) => {
  try {
    dispatch(addnewBookToList(payload));
    await axios
      .post(url, payload)
      .then((response) => dispatch({ type: ADD_BOOK_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: ADD_BOOK_FAILURE, error });
  }
};

export const getBooks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOK, payload: true });
    await axios.get(url).then((res) => {
      const { data } = res;
      const books = Object.values(data);
      const ids = Object.keys(data);
      const newBooks = [];
      books?.map((book, i) => book?.map((item) => newBooks.push({
        item_id: ids[i],
        title: item.title,
        category: item.category,
      })));
      dispatch({ type: GET_BOOK_SUCCESS, newBooks });
    });
    dispatch({ type: GET_BOOK, payload: false });
  } catch (error) {
    dispatch({ type: GET_BOOK_FAILURE, error });
  }
};

export const removeBookFromList = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBook = (payload) => async (dispatch) => {
  try {
    dispatch(removeBookFromList(payload));
    await axios
      .delete(`${url}/${payload.item_id}`, payload)
      .then((response) => dispatch({ type: REMOVE_BOOK_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_BOOK_FAILURE, error });
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case ADD_BOOK_SUCCESS:
      return { ...state, onSuccess: action.response.data };
    case ADD_BOOK_FAILURE:
      return { ...state, onFailure: action.error };
    case GET_BOOK:
      return { ...state, isLoading: action.payload };
    case GET_BOOK_SUCCESS:
      return { ...state, books: action.newBooks };
    case GET_BOOK_FAILURE:
      return { ...state, onFailure: action.error };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter(
            (book) => book.item_id !== action.payload.item_id,
          ),
        ],
      };
    case REMOVE_BOOK_SUCCESS:
      return { ...state, onSuccess: action.response.data };
    case REMOVE_BOOK_FAILURE:
      return { ...state, onFailure: action.error };
    default:
      return state;
  }
};

export default reducer;
