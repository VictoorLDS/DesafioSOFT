import NavBar from "../components/NavBar"
import BodyHome from "../components/home/BodyHome"
import RequireAuth from "../components/requireAuth"


const Home = () => {
  return (
    <>
    <RequireAuth/>
    <NavBar/>
    <BodyHome/>
    </>
  )
}

export default Home