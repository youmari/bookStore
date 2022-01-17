import { Route, Routes } from 'react-router-dom';
import AddNewBook from './components/AddNewBook';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          element={(
            <>
              <Books />
              <AddNewBook />
            </>
          )}
          path="/"
        />
        <Route element={<Categories />} path="/categories" />
      </Routes>
    </div>
  );
}

export default App;
