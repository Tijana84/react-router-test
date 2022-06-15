import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 
  const handleRoute = () => {
    navigate("create-car");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleRoute}>Go to create car</button>
    </div>
  );
};

export default Home;
