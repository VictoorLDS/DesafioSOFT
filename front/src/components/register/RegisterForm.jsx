import ButtonDefault from "../buttons/ButtonDefault";
import "../../styles/styleRegister/RegisterForm.css";
import { useState } from "react";
const urluser = 'http://localhost/routes/users.php'

const RegisterForm = () => {
    const [username, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [password2, setPass2] = useState("")

    function verifyData(){
      if( password !== password2){
            alert("Passwords must be the same!")
            throw new Error("nao deu")
        }
        if(username!== "" && email!=="" && password!=="" && password2!==""){
            alert("User registered")
            return true  
        }
        else{
            alert("All field are required!")
            throw new Error("nao deu")
        }
    }

    async function registerUser(){
        try {
          verifyData()
          const userData = new FormData()
          userData.append("username", username)
          userData.append("email", email)
          userData.append("password", password)
  
          await fetch(urluser,{
              method: "POST",
              body: userData,
          })
        }catch(e){
          console.log(e)
        }
        
    }

  return (
    <>
      <body>
        <div className="register-form">
          <form className="formlog">
            <p className="title">Register </p>
              <input
                required=""
                placeholder="Username"
                type="text"
                className="inputreg"
                value={username}
                onChange={(e) => setUser(e.target.value)}
              />
            <input
              required=""
              placeholder="E-mail"
              type="email"
              className="inputreg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              required=""
              placeholder="Password"
              type="password"
              className="inputreg"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />

            <input
              required=""
              placeholder="Confirm your password"
              type="password"
              className="inputreg"
              value={password2}
              onChange={(e) => setPass2(e.target.value)}
            />

            <ButtonDefault buttonFunction={registerUser} classStyle={"submit"} Text={"Register"} />

            <p className="signin">
              Already have an acount ? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </body>
    </>
  );
};

export default RegisterForm;
