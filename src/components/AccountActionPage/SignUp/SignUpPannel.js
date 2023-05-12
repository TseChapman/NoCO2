import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPannel() {
  const auth = getAuth();
  const navigate = useNavigate(); // add useNavigate hook
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: ""
  });


  async function createUser() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpInput.email, signUpInput.password);
      const user = userCredential.user;
      navigate("/dashboard", { state: { uid: user.uid } });
      //alert(user.uid);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error
      //alert(errorMessage);
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();
    //alert(JSON.stringify(signUpInput, null, 2));
    createUser();
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
    <div class="z-10 bg-cloudy/90 w-2/5 h-3/4 rounded-2xl p-4 flex items-center justify-center">
      <div class="z-10 bg-white w-full h-full rounded-2xl p-8">
        <div class="text-3xl font-bold pb-4">Sign Up</div>
        <div>
          <form class="flex flex-col" onSubmit={onSubmitForm}>
            <label>
              <div class="text-2xl mb-1">Email</div>
              <input
                class="border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                name="email"
                type='text'
                value={signUpInput.email}
                onChange={onFormUpdate}
              />
            </label>
            <label class="mt-4">
              <div class="text-2xl mb-1">Password</div>
              <input
                class="border border-black h-20 w-full rounded-2xl text-3xl pl-2"
                name="password"
                type='password'
                value={signUpInput.password}
                onChange={onFormUpdate}
              />
            </label>
            <button
              class="mt-4 h-20 w-full rounded-2xl bg-matrix text-merino text-3xl font-bold"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
          <hr class="z-10 w-full mt-4 border-black" />
          <div class="text-2xl mb-1">
            Already have an account: <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignUpPannel