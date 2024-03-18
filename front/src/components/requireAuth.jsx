import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RequireAuth = () => {
    const [logged, setLogged] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user)
        if(!user.code){
            return setLogged(false)
        }
    }, [])
  return (
    <>
    {
        !logged && <>
        {
            navigate("/")
        }
        </>
    }
    </>
  )
}

export default RequireAuth