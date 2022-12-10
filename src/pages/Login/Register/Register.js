import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Register = () => {
  const [error, setError] = useState("");
  const { createUser, addNamePhoto } = useContext(AuthContext);
  const urlSuffix = ["jpg", "png", "jpeg"];

  const onSubmitHandle = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const url = event.target.url.value;
    const password = event.target.password.value;
    let isUrlOk = false;
    urlSuffix.forEach((suffix) => {
      if (url.endsWith(suffix) === true) {
        isUrlOk = true;
      }
    });

    if (isUrlOk == true && password.length >= 7) {
      setError("");

      createUser(email, password)
        .then((result) => {
          // Signed in
          const user = result.user;
          console.log("Register", user);
          addNamePhoto(name, url)
            .then(() => {
              console.log("profile updated successfully(register.js)");
            })
            .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError(
        "Please check the form again for correct url and password should be more that 7 characters long."
      );
    }
  };
  return (
    <div>
      <Form className="my-4" onSubmit={onSubmitHandle}>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-secondary">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">Photo URL</Form.Label>
          <Form.Control
            name="url"
            type="text"
            placeholder="Enter your photo url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-secondary">Password </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-danger d-block mb-2">{error}</Form.Text>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
