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
import { authSignup } from "../contexts/authAction";
import { AuthContext } from "../contexts/authContext";

const RegistrationForm = () => {

  const { auth: { error, loading, token }, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    authSignup(username, email, password1, password2, dispatch);
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
          Signup to your account
          </Header>
        {error && <p>{error.message}</p>}

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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                onChange={(e) => setPassword1(e.target.value)}
                fluid
                value={password1}
                name="password1"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                onChange={(e) => setPassword2(e.target.value)}
                fluid
                value={password2}
                name="password2"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
              />

              <Button
                color="teal"
                fluid
                size="large"
                loading={loading}
                disabled={loading}
              >
                Signup
                </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </Message>
        </React.Fragment>
      </Grid.Column>
    </Grid>
  );
}

export default RegistrationForm;
