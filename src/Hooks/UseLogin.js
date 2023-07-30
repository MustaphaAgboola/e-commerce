import  { useState } from 'react'
import { baseUrl } from '../baseurl';
import { useNavigate } from 'react-router-dom';




const UseLogin = (loginRequest) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const onLogin = async () => {
   try {
     setLoading(true);
     const response = await fetch(baseUrl + "auth/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify,
       username: loginRequest.username,
       password: loginRequest.password,
     });
     const data = await response.json();
     console.log(data);
     navigate("home/dashboard", {
       replace: true,
       state: data,
     });
   } catch (error) {
     console.log("error-message" + error);
     setLoading(true);
   }
 };
 return { loading, onLogin}
}

export default UseLogin