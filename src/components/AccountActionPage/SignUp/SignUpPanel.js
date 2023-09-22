import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUser } from "../../../api/NoCO2_api";
import { Oval } from 'react-loader-spinner';
import CustomAlert from "../../CustomAlert";

function SignUpPanel() {
  const auth = getAuth();
  const navigate = useNavigate(); // add useNavigate hook
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  function handleError(error) {
    switch (error) {
      case "invalid-email":
        return "Invalid Email";
      case "weak-password":
        return "Password must be at least 6 characters";
      case "email-already-in-use":
        return "Email Already in Use";
      case "missing-email":
        return "Missing Email";
      case "missing-password":
        return "Missing Password";
      default:
        return "Internal Error";
    }
  }

  async function signUpUser() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpInput.email, signUpInput.password);
      return userCredential.user;
    } catch (error) {
      var errorMessage = error.message;
      // Handle the error

      const regex = /\/(.*?)\)/;
      const match = regex.exec(errorMessage);
      const extractedText = match ? match[1] : '';
      errorMessage = handleError(extractedText);

      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }

  const onSubmitForm = async e => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const user = await signUpUser();
      await createUser(user.uid);
      setIsLoading(false);
      await navigate("/NoCO2/dashboard");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  const onFormUpdate = e => {
    const nextFormState = {
      ...signUpInput,
      [e.target.name]: e.target.value,
    };
    setSignUpInput(nextFormState);
  }

  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <CustomAlert message={error} />
      <div class="z-10 mt-20 bg-cloudy/90 w-5/6 sm:w-4/6 h-5/6 rounded-2xl p-4 flex items-center justify-center">
        <div class="z-10 bg-white w-full h-full rounded-2xl p-8 overflow-y-auto">
          <div class="font-heebo lg:text-5xl md:text-3xl sm:text-2xl text-3xl font-bold pb-4">Sign Up</div>
          <div>
            <form class="flex flex-col" onSubmit={onSubmitForm}>
              <label>
                <div class="font-heebo text-2xl mb-1">Email</div>
                <input
                  class="font-heebo border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                  name="email"
                  type='text'
                  value={signUpInput.email}
                  onChange={onFormUpdate}
                />
              </label>
              <label class="mt-4">
                <div class="font-heebo text-2xl mb-1">Password</div>
                <input
                  class="font-heebo border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                  name="password"
                  type='password'
                  value={signUpInput.password}
                  onChange={onFormUpdate}
                />
              </label>
              <button
                class="font-heebo mt-4 h-20 w-full rounded-2xl bg-matrix text-merino text-3xl font-bold flex items-center justify-center"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ?
                  <Oval
                    height={35}
                    width={35}
                    color='#f5ece5'
                    secondaryColor="#b0aca2"
                  /> :
                  "SIGN UP"
                }
              </button>
            </form>
            <hr class="z-10 w-full mt-4 border-black" />
            <div class="font-heebo sm:text-2xl text-sm mb-1">
              Already have an account: <Link to="/NoCO2/login" class="text-matrix hover:underline underline-offset-2">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPanel