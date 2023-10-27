import React, { useEffect, useState } from "react";
import "./Auth.scss";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

interface IAuth {
  isSignInPage: boolean;
}

const Auth: React.FC<IAuth> = ({ isSignInPage = false }: IAuth) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="auth-wrapper">
      <Form className="auth-form">
        <Form.Group className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            onChange={onEmailChange}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              className="form-input"
              type={showPassword ? "text" : "password"}
              onChange={onPasswordChange}
            />
            {/* <InputGroup.Text className="show-pass-btn"> */}
            <Button
              className="show-pass-btn"
              onClick={() => setShowPassword((oldState) => !oldState)}
            >
              <Eye />
            </Button>
            {/* </InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Button className="submit-btn btn" variant="primary" type="submit">
          {isSignInPage ? "Sign In" : "Sign Up"}
        </Button>
        <Form.Group className="auth-page-nav-text-wrap">
          <Form.Text className="auth-page-nav-text">
            or
            <Link
              className="auth-page-nav-link"
              to={isSignInPage ? "/sign-up" : "/sign-in"}
            >
              {isSignInPage ? "Sign Up" : "Sign In"}
            </Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export { Auth };
