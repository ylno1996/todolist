
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const baseURL = 'http://localhost:5555';

const handleIDChange = (e) => {
  console.log(e.target.value);
  const id = e.target.value;
};

const handleSignIn = (e) => {

 console.log(e)
};

const handleConfirm = () => {

}

signIn.addEventListener("change", handleIDChange);
signIn.addEventListener("submit", handleSignIn);