import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";
import supabase from "../utils/Client";
function Success() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const signOut = async ()=>{
        setLoading(true);
        const {error} = await supabase.auth.signOut();
        setLoading(false);
        navigate("/")
    }
    const [user,setUser] = useState({})
    useEffect(()=>{
        async function getUserData(){
            setLoading(true);
            await supabase.auth.getUser().then((value)=>{
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
            setLoading(false);
        }
        
        getUserData()
        
    },[])
    if (loading) return <Loading />;
  return (
    <>
    {Object.keys(user).length!==0?
        <>
                <div>Success</div>
                <button onClick={() => signOut()}>Logout</button>
                <h1>Email: {user.email}</h1>
                <img src={user.user_metadata.avatar_url}/>
        </>:
        <>
            <h2>User is not loggedin</h2>
            <button onClick={()=> navigate("/")}>Go to home</button>
        </>
    }
      
    </>
  );
}

export default Success