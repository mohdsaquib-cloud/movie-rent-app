import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };
    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(6).label("Password"),
    };
    doSubmit = () => {
        console.log("Submitted");
    };
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
