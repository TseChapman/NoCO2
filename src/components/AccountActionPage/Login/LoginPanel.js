import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomAlert from "../../CustomAlert";

function LoginPanel() {
  const auth = getAuth();
  const navigate = useNavigate(); // add useNavigate hook
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState('');

  function handleError(error) {
    switch (error) {
      case "invalid-email":
        return "Invalid Email";
      case "wrong-password":
        return "Wrong Password";
      case "user-not-found":
        return "Email Not Signed up";
      case "missing-password":
        return "Missing Password";
      default:
        return "Internal Error";
    }
  }

  async function loginUser() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginInput.email, loginInput.password);
      const user = userCredential.user;
      navigate("/NoCO2/dashboard", { state: { uid: user.uid } });
    } catch (error) {
      var errorMessage = error.message;
      // Handle the error

      const regex = /\/(.*?)\)/;
      const match = regex.exec(errorMessage);
      const extractedText = match ? match[1] : '';
      errorMessage = handleError(extractedText);

      setError(errorMessage);
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();
    loginUser();
  }

  const onFormUpdate = e => {
    const nextFormState = {
      ...loginInput,
      [e.target.name]: e.target.value,
    };
    setLoginInput(nextFormState);
  }

  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <CustomAlert message={error} />
      <div class="z-10 mt-20 bg-cloudy/90  w-2/4 h-5/6 rounded-2xl p-4 flex items-center justify-center">
        <div class="z-10 bg-white w-full h-full rounded-2xl p-8 overflow-y-auto">
          <div class="lg:text-5xl md:text-3xl text-2xl font-bold pb-4">Login</div>
          <div>
            <form class="flex flex-col" onSubmit={onSubmitForm}>
              <label>
                <div class="text-2xl mb-1">Email</div>
                <input
                  class="border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                  name="email"
                  type='text'
                  value={loginInput.email}
                  onChange={onFormUpdate}
                />
              </label>
              <label class="mt-4">
                <div class="text-2xl mb-1">Password</div>
                <input
                  class="border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                  name="password"
                  type='password'
                  value={loginInput.password}
                  onChange={onFormUpdate}
                />
              </label>
              <button
                class="mt-4 h-20 w-full rounded-2xl bg-matrix text-merino text-3xl font-bold"
                type="submit"
              >
                LOGIN
              </button>
            </form>
            <hr class="z-10 w-full mt-4 border-black" />
            <div class="text-2xl mb-1">
              Don't have an account: <Link to="/NoCO2/signup" class="text-matrix hover:underline underline-offset-2">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPanel