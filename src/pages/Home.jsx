import { Link } from "../components/Link";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a sobre nosotros</Link>  
    </>
  )
}

export default HomePage;