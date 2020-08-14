import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { NavLink, Redirect } from "react-router-dom";
import { authLogin } from "../contexts/authAction";
import { AuthContext } from "../contexts/authContext";


const LoginForm = () => {
  const { auth: { error, loading, token }, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    authLogin(username, password, dispatch);
  };



  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
          </Header>
        {error && <p>{this.props.error.message}</p>}

        <React.Fragment>
          <Form size="large" onSubmit={(e) => handleSubmit(e)}>
            <Segment stacked>
              <Form.Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                onChange={(e) => setPassword(e.target.value)}
                fluid
                value={password}
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button
                color="teal"
                fluid
                size="large"
                loading={loading}
                disabled={loading}
              >
                Login
                </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <NavLink to="/signup">Sign Up</NavLink>
          </Message>
        </React.Fragment>
      </Grid.Column>
    </Grid>
  );
}

export default LoginForm;
