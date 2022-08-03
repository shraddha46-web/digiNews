import "./App.css";
import HeaderWrapper from "./component/HeaderWrapper";
import NewsWrapper from "./component/NewsWrapper";
import "./theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import NoPage from "./component/NoPage";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderWrapper />
        <Routes>
          <Route
            path="/"
            element={
              <NewsWrapper
                key="top-news"
                pageSize="20"
                country="in"
                category="top headlines"
              />
            }
          ></Route>
          <Route
            index
            element={
              <NewsWrapper
                pageSize="20"
                country="in"
                category="top headlines"
              />
            }
          />
          <Route path="about" exact element={<About />} />
          <Route
            path="business"
            exact
            element={
              <NewsWrapper
                key="business"
                pageSize="20"
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="entertainment"
            exact
            element={
              <NewsWrapper
                key="entertainment"
                pageSize="20"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="general"
            exact
            element={
              <NewsWrapper
                key="general"
                pageSize="20"
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="health"
            exact
            element={
              <NewsWrapper
                key="health"
                pageSize="20"
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="science"
            exact
            element={
              <NewsWrapper
                key="science"
                pageSize="20"
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="sports"
            exact
            element={
              <NewsWrapper
                key="sports"
                pageSize="20"
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="technology"
            exact
            element={
              <NewsWrapper
                key="technology"
                pageSize="20"
                country="in"
                category="technology"
              />
            }
          />
          <Route path="*" element={NoPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
