import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState("Login")
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
              btnNameReact==="Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login")
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;


/*let btnLoginLogout="Login"

<button onClick={() => {
  btnLoginLogout = btnLoginLogout === "Login" ? "Logout" : "Login"
  console.log(btnLoginLogout)
}}>{btnLoginLogout}</button>*/

/*This will not work because it will not sync with UI when button is in Login if we 
want to Logout if we clicked it will change/update in the data but in UI it will be not 
reflected. Because we used normal javascript variable.Because

To keep sync the data layer with UI we have to use local state variable - superpowerful react variable
That is useState() hook.*/


/*const [btnNameReact,setBtnNameReact]=useState("Login")

<button onClick={()=>{
  btnNameReact==="Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login")
}}>{btnNameReact}</button>

Initial State => State variable was "Login"
As soon as setBtnNameReact => It will call the header component once again it re-renders 
and create a new instance. Now this btnNameReact is variable and different from oldbtnNameReact.
When this new btnNameReact is created it is not created with default value it is created with updated value inside setBtnNameReact("LogOut")

=>Inital State - btnNameReact="Login"
=>New btnNameReact = "Logout" */