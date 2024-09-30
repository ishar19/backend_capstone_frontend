import Form from "../../components/form";
import { useState } from "react";
export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false
    });
    const formFields = [
        {
            name: "name",
            type: "text",
            placeholder: "Enter your name",
            value: formData.name,
            onChange: (e) => {
                setFormData({ ...formData, name: e.target.value })
            }
        },
        {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            value: formData.email,
            onChange: (e) => {
                setFormData({ ...formData, email: e.target.value })
            }
        },
        {
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            value: formData.password,
            onChange: (e) => {
                setFormData({ ...formData, password: e.target.value })
            }
        }, {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm your password",
            value: formData.confirmPassword,
            onChange: (e) => {
                setFormData({ ...formData, confirmPassword: e.target.value })
            }
        }
    ]
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(errorMessages["name"].isValid);
        Object.keys(errorMessages).forEach(key => {
            if (!errorMessages[key].isValid) {
                errorMessages[key].onError();
            }
        })
    }
    const errorMessages = {
        name: {
            message: "Name is required",
            isValid: formData.name.length > 0,
            onError: () => {
                setError((error) => ({ ...error, name: true }))
            }
        },
        email: {
            message: "Email is required",
            isValid: formData.email.length > 0,
            onError: () => {
                setError((error) => ({ ...error, email: true }))
            }
        },
        password: {
            message: "Password is required",
            isValid: formData.password.length > 0,
            onError: () => {
                setError((error) => ({ ...error, password: true }))
            }
        },
        confirmPassword: {
            message: "Passwords do not match",
            isValid: formData.confirmPassword === formData.password,
            onError: () => {
                setError((error) => ({ ...error, confirmPassword: true }))
            }
        }
    }

    return (
        <><p>Register</p><Form error={error} formFields={formFields} onSubmit={onSubmit} errorMessages={errorMessages} /></>
    )
}