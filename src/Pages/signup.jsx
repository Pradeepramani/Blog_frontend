import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import { BsSquare } from "react-icons/bs";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup() {
    const navigate = useNavigate();
    const dispach=useDispatch()
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });

    const [previous, setPrevious] = useState();

    function createAcc(e) {
        e.preventDefault();
        if (!state.avatar || !state.name || !state.email || !state.password) {
            toast.error("All fields are mandatory");
            return;
        }
        console.log(state)
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value,
        });
        
        
    }
     
   async function onformsubmit()
    {
        const respone=await createAccount(state)
        if(respone?.payload?.success)
        {
            navigate("/")
        }
       setState ({
            name: "",
            email: "",
            password: "",
            avatar: "",
        });

        setPrevious("")
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
            setPrevious(this.result);
        });

    }


    return (
        <>
            <Homelayout>
                <div style={{ minHeight: "90vh" }}>
                    <form onSubmit={onformsubmit} style={{ position: "absolute", top: "50px", left: "400px" }}>
                        <label htmlFor="image_upload" style={{ margin: "50px" }}>
                            {previous ? <img src={previous} alt="Preview" /> : <BsSquare />}
                        </label>
                        {/* Removed value attribute here */}
                        <input
                            type="file"
                            className="hidden"
                            onChange={imageHandler}
                            name="avatar"
                            id="image_upload"
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
                        <button onClick={createAcc}>Create account</button>
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
