import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nxoUcOAchjPBlXPUHhlw/books';

const initialState = {
  isLoading: false,
  onSuccess: '',
  onFailure: '',
};
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => async (dispatch) => {
  try {
    dispatch({ type: ADD_BOOK });
    await axios
      .post(url, payload)
      .then((response) => dispatch({ type: ADD_BOOK_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: ADD_BOOK_FAILURE, error });
  }
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, isLoading: true };
    case ADD_BOOK_SUCCESS:
      return { ...state, onSuccess: action.response.data };
    case ADD_BOOK_FAILURE:
      return { ...state, onFailure: action.error };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
