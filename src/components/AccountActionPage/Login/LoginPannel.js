import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPannel() {
  const auth = getAuth();
  const navigate = useNavigate(); // add useNavigate hook
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  });

  async function loginUser() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginInput.email, loginInput.password);
      const user = userCredential.user;
      //alert(user.uid);
      navigate("/dashboard", { state: { uid: user.uid } });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error
      //alert(errorMessage);
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();
    //alert(JSON.stringify(loginInput, null, 2));
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
    <div class="z-10 bg-cloudy/90 w-2/5 h-3/4 rounded-2xl p-4 flex items-center justify-center">
      <div class="z-10 bg-white w-full h-full rounded-2xl p-8">
        <div class="text-3xl font-bold pb-4">Login</div>
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
            Don't have an account: <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default LoginPannel