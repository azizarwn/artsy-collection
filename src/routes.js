import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Productlist from "./pages/ProductList/Productlist";
import TodoApp from "./pages/TodoList/TodoApp";
import ScrollToTop from "./ScrollToTop";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/product-list">
            <Productlist />
          </Route>
          <Route path="/product-detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/todolist">
            <TodoApp />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
