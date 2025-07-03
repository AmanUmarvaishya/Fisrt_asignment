import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "./GoogleApi";
import "./Form.css";

function GoogleLogin() {
  const navigate = useNavigate();
  const responseGoogle = async (authResult) => {
    try {  
      if (authResult["code"]) {//google server connect and find code
        const result = await googleAuth(authResult["code"]); 
        const { email, name } = result.data.user; //find user email , name
        const token = result.data.token;
        const obj = { email, name, token };
        localStorage.setItem("user-info", JSON.stringify(obj));
     
        
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div>
      <button onClick={googleLogin} className="btn">
        Sign in with google
      </button>
    </div>
  );
}

export default GoogleLogin;
