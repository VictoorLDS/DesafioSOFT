import "../../styles/styleRegister/RegisterForm.css";
import { useState} from "react";
import {useNavigate} from "react-router-dom"
const urllogin = 'http://localhost/routes/login.php'

const LoginForm = () => {

    const [username, setUser] = useState("")
    const [password, setPass] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    function verifyData(){
        if(username!== "" && password!==""){
          return true
        }
        else{
            alert("All field are required!")
            throw new Error("Não deu")
        }
    }

    async function loginUser(e){
      e.preventDefault()
      try{
        verifyData()
        const userData = new FormData()
        userData.append("username", username)
        userData.append("password", password)

        await fetch(urllogin,{
            method: "POST",
            body: userData,
          }).then(async res => {
            let data = await res.json()
            if(data.error){
              setError(data.error)
            }
            else{
              localStorage.setItem("user", JSON.stringify(data))
              navigate("/home")
            }
          })
        }
        catch(e){
          console.log(e)
        }
      }

  return (
    <>
          <body>
        <div className="register-form">
          <form className="formlog" onSubmit={(e)=>{loginUser(e)}}>
            <p className="title">Login </p>
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
              placeholder="Password"
              type="password"
              className="inputreg"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
            {error && <p >{error}</p>}
            <input type="submit" value="LOGIN" className="submit"/>

            <p className="signin">
              Don`t have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </body>
    </>
  )
}

export default LoginForm