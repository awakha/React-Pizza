import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice.js";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />н
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}
export default App;
