Condtional Rendering 

Showing something on the screen only if a certain condition is true — otherwise showing something else (or nothing).


  WORKING CODE 
  
import { useState } from "react";

function LoginStatus() {
const [loggedIn, setLoggedIn] = useState(false);

return (


{loggedIn ? "You are logged in ✅" : "You are logged out ❌"}



  <button onClick={() => setLoggedIn(!loggedIn)}>
    {loggedIn ? "Logout" : "Login"}
  </button>
</div>

);
}

export default LoginStatus;

This component uses state (loggedIn) to track whether the user is logged in or not.
JSX uses conditional rendering to show different text and button labels based on the loggedIn value, toggled by a click event.
