import jquery from "jquery";
import $ from jquery


const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const baseURL = 'http://localhost:5555';

const handleSignIn = (e) => {
 
    const tof = findID(e.target[0].value);
    if (tof) {
      window.open(`${baseURL}`+`/${e.target[0].value}`,'_self').focus();
    } else {
     alert("ID를 찾지 못했습니다.")
    }
    e.preventDefault();
};

const handleConfirm = () => {

}

signIn.addEventListener("submit", handleSignIn)