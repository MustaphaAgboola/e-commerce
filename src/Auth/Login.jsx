import React, { useEffect, useState } from "react";
import backgoundImage from "../Assets/images/bg-image.svg";
import UseLogin from "../Hooks/UseLogin";
import { UseSetRequest } from "../Hooks/UseSetRequest";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";

const Login = () => {
  const [loginRequest, setLoginRequest] = useState({
    username: null,
    password: null,
  });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      window.location.href = "/home/dashboard";
    }
  }, []);

  const { loading, onLogin } = UseLogin(loginRequest);

  const { setRequest } = UseSetRequest(setLoginRequest);

  const inputFields = [
    { label: "Username:", type: "text" },
    { label: "Password:", type: "password" },
  ];

  return (
    <motion.div
      className="h-screen grid grid-cols-2 content-center"
    >
      <section>
        <img src={backgoundImage} alt="" />
      </section>
      <section className=" flex justify-center items-center">
        <form
          action=""
          onSubmit={(e) => {
            onLogin(e.preventDefault());
          }}
        >
          {inputFields.map((input, index) => (
            <div key={index} className=" flex flex-col p-6 gap-2">
              <label htmlFor="" className=" text-purple-950">
                {input.label}
              </label>
              <input
                type={input.type}
                className=" outline-none border-2 border-purple-400 py-2 px-4 rounded-md"
                onChange={(e) => {
                  setRequest(e.target.value, input.label.toLowerCase());
                }}
              />
            </div>
          ))}

          <div className=" flex justify-center">
            <button className=" outline-none border-2 bg-purple-900 py-2 px-4 rounded-md w-28 mt-3 hover:scale-90 text-white">
              {loading ? (
                <>
                  <BeatLoader />
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </section>
    </motion.div>
  );
};

export default Login;
