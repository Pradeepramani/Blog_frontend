import { Link } from "react-router-dom";
import Footer from "../Components/Footer/footer.jsx";
import { FiMenu } from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"; 

function Homelayout({ children }) {

const dispatch= useDispatch();
const navigate= useNavigate();
const isloggedIn= useSelector((state) => state?.auth?.isloggedIn);
const role =useSelector((state) => state?.auth?.role);
console.log(isloggedIn)
function logout(e)
{
 // TODO
    e.preventDefault();
    navigate("/")
}

    function colapse()
    {
        const data=document.getElementsByClassName("drawer-side")
        data[0].style.width='auto'
    }  
    function hidden()
    {
        const data=document.getElementsByClassName( "drawer-toggle")
        data[0].checked= false;
         const data1=document.getElementsByClassName("drawer-side")
        data1[0].style.width='0'
    }  
    
 return (
        <>
            <div className="min-h-[90vh]">
                <div className="drawer absolute left-0 z-50 w-full">
                    {/* Drawer toggle */}
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer">
                            {/* Menu icon */}
                            <FiMenu onClick={colapse}
                             size={"32px"} className="font-bold text-white m-4" />
                        </label>

                    </div>
                    <div className="drawer-side w-0">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li className="absolute right-4 w-20 h-20 z-50">
                                <button onClick={hidden}>
                                <AiFillCloseCircle size={24}/>
                                </button>
                            </li>
                            <li >
                                {isloggedIn && role ==="admin" && (
                                <Link  to="/admin/dashboard">Login</Link>
                                                                
                                )
                                }
                            </li>
                            <li>
                               <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                               <Link to="/course">Course</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            
                            { !isloggedIn ?
                             (
                                <li className="absolute bottom-20 w-[90%]">
                                    <div className="w-full flex items-center justify-center">
                                    <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                        <Link to="/login">Login1</Link>
                                    </button>
                                    <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                    </div>
                                </li>
                             ) 
                             : (
                                <li className="absolute bottom-20 w-[90%]">
                                    <div className="w-full flex items-center justify-center">
                                    <button className="btn-primary px-4 py-1 text-yellow-50 font-semibold rounded-md w-full">
                                           <Link to="/login/user z-50" >Profile</Link>
                                     </button>
                                    <button
                                        className="btn-secondary  px-4 py-1 font-semibold rounded-md w-full"
                                        onClick={logout} >
                                        loggout
                                    </button>
                                    </div>
                                </li>
                                )}

                          


                        </ul>
                           


                    </div>
                </div>
                
            {children}
            <Footer />
            </div>

        </>
    );
}

export default Homelayout;
