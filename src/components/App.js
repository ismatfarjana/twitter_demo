import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      <Link to="/page2">Page2</Link>
    </div>
  );
};
const pageTwo = () => {
  return (
    <div>
      <Link to="/page1">Page1</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={pageOne} />
        <Route path="/page2" exact component={pageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
