import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";
import supabase from "../utils/Client";
function SignIn() {

  const [loading, setLoading] = useState(false);
  const signInWithGoogle = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setLoading(false)
    console.log(data, error);
  };
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async(event)=>{
    if(event==="SIGNED_IN"){
        
        navigate("/success");
    }
    else if(event==="SIGNED_OUT"){
        navigate("/");
    }
    
  })
   if (loading) return <Loading/>;
  return (
    <div className="App">
      <button onClick={() => signInWithGoogle()}>Sign in with google</button>
    </div>
  );
}

export default SignIn