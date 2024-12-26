import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import { BsSquare } from "react-icons/bs";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Fixed typo
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "", // Change to null to properly handle file
    });

    const [previous, setPrevious] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value,
        });
    }

    async function onformsubmit(e) {
        e.preventDefault(); // Prevent form's default submit behavior
    
        if (!state.name || !state.email || !state.password) {
            toast.error("All fields are mandatory");
            return;
        }
    
        const formData = new FormData();
        formData.append("name", state.name);
        formData.append("email", state.email);
        formData.append("password", state.password);
        if (state.avatar) {
            formData.append("avatar", state.avatar);
        }
    
        try {
            const response = await dispatch(createAccount(formData));
    
            if (response.meta.requestStatus === "fulfilled") {
                toast.success("Account created successfully!");
                navigate("/about");
                setState({
                    email: "",
                    name: "",
                    password: "",
                    avatar: null,
                });
                setPrevious("");
            } else {
                toast.error(response.payload || "Account creation failed");
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            toast.error("An unexpected error occurred");
        }
    }
    
    function imageHandler(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (!uploadImage) return;

        setState({
            ...state,
            avatar: uploadImage,
        });

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadImage);
        fileReader.addEventListener("load", function () {
            setPrevious(this.result); // Preview the uploaded image
        });
    }

    return (
        <>
            <Homelayout>
                <div style={{ minHeight: "90vh" }}>
                    <form onSubmit={onformsubmit} style={{ position: "absolute", top: "50px", left: "400px" }}>
                        <label htmlFor="imageupload" style={{ margin: "50px" }}>
                            {previous ? <img src={previous} alt="Preview" /> : <BsSquare />}
                        </label>
                        <input
                            type="file"
                            className="hidden"
                            onChange={imageHandler}
                            name="avatar"
                            id="imageupload"
                            accept=".jpg, .png, .jpeg"
                        />
                        <label htmlFor="namefield">
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                id="namefield"
                                placeholder="Enter the name"
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={state.email}
                                id="email"
                                placeholder="Enter the email"
                            />
                        </label>
                        <label htmlFor="password">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={state.password}
                                id="password"
                                placeholder="Enter the password"
                            />
                        </label>
                        <button type="submit">Create account</button>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </Homelayout>
        </>
    );
}

export default Signup;
