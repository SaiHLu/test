
export interface IHome {
  frontendLayout: boolean;
}

const Home = () => {
  return (
    <h1>Frontend Page</h1>
  )
}

Home.frontendLayout = true;

export default Home
