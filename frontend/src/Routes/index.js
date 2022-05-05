import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";

import { Login } from "../components/Pages/Login";
import { Register } from "../components/Pages/Register";
import { Set_token_status } from "../redux/Action";
// import { TestingComponent } from "../Test";

export const Routes = () => {
  const { tokenStatus } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(Set_token_status(true));
    }
  }, []);
  return (
    <BrowserRouter>
      {/* {tokenStatus ? <Redirect to="/" /> : <Redirect to="/login" />} */}
      <Switch>
        <Route exact path="/">
          <>
            <Home />
          </>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
