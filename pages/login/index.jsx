import Form from "../../components/form";
import { useState } from "react";
// import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
export default function Register() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (token) {
        navigate("/");
    }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: false,
        password: false,
    });
    const formFields = [
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
        },
    ]
    const errorMessages = {
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
    }
    const onSubmit = async (e) => {
        let isError = false;
        e.preventDefault();
        Object.keys(errorMessages).forEach(key => {
            if (!errorMessages[key].isValid) {
                isError = true;
                errorMessages[key].onError();
            }
        })
        if (!isError) {
            try {
                const res = await login(formData);
                if (res.status === 200) {
                    alert("Logged in successfully");
                    const token = res.data.token;
                    localStorage.setItem("token", token);
                    navigate("/");
                }

                else {
                    alert("Something went wrong");
                }
            }
            catch (e) {
                if (e.response.status === 400) {
                    alert("Invalid email or password");
                }
            }
        }
    }
    return (
        <><p>Login</p><Form error={error} formFields={formFields} onSubmit={onSubmit} errorMessages={errorMessages} /></>
    )
}