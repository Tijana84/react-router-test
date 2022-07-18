import { useNavigate } from "react-router-dom";
import "./index.css";

const Gallery = () => {
  const navigate = useNavigate(); 
  const handleRoute = () => {
    navigate("photo-1");
  };
  

  return (
    <div className="container">
      <h1>OUR PHOTO GALLERY</h1>
      <div className="top-content">
        <h3>Photo Gallery</h3>
        <span onClick={handleRoute}>
          Photo-1
        </span>
        <label for="check2">Photo-2</label>
        <label for="check3">Photo-3</label>
        <label for="check4">Photo-4</label>
      </div>
      <div className="photo-gallery">
        <div className="pic place">
          <img
            src="https://images.unsplash.com/photo-1655321300721-5debfd81176b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655326525660-3a68693a478a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655326525105-d7c11de4f665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655321300721-5debfd81176b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655326525660-3a68693a478a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655326525105-d7c11de4f665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655326525660-3a68693a478a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="pic photo">
          <img
            src="https://images.unsplash.com/photo-1655321300721-5debfd81176b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
  }

export default Gallery;
