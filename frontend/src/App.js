import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { authCheckState } from "./contexts/authAction";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";
import { AuthContext } from "./contexts/authContext";

const App = (props) => {
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    authCheckState(dispatch);
  }, [dispatch])

  return (
    <Router>
      <CustomLayout {...props}>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );

}

export default App;
