import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {},
    };
    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(6).label("Password"),
        name: Joi.string().required().label("Name"),
    };
    doSubmit = () => {
        console.log("Submitted");
    };
    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
