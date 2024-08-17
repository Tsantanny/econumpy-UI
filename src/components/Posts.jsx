import "../styles/Posts.css";
import user from "../assets/images/user.jpeg";
import { useState } from "react";
function Posts() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  // console.log(formattedDate);

  const [like, setlike] = useState(0);
  function handleLike() {
    if (like != 1) {
      setlike(1);
      setdislike(0);
    } else if (like == 1) {
      setlike(0);
    }
  }
  const [dislike, setdislike] = useState(0);
  function handledisLike() {
    if (dislike != 1) {
      setdislike(1);
      setlike(0);
    } else if (dislike == 1) {
      setdislike(0);
    }
  }
  return (
    <>
      <section className="post-container box-shadow">
        <div className="post-header">
          <div className="profile">
            <img src={user} alt="" className="user" />
            <span>Emilie</span>
          </div>
          <span className="date">Pubished on : {formattedDate}</span>
        </div>
        <div className="post-content mt-4">
          <div className="title">
            <span className="title-text">
              Our Forests Are Under Threat – Let's Take Action Now
            </span>
            <span className="tag">Environment</span>
          </div>
          <p className="mt-4">
            The deforestation rates have increased alarmingly in recent years,
            putting our planet’s biodiversity at great risk. It is crucial for
            us to unite as a community to promote sustainable practices and
            advocate for the protection of our forests. Every action counts,
            from reducing paper usage to supporting reforestation initiatives.
            Let's make a difference together.
          </p>
        </div>
        <div className="reaction-panel">
          <div onClick={handleLike}>
            <i className="fas fa-thumbs-up"></i>
            <span>{like}</span>
          </div>
          <div onClick={handledisLike}>
            <i className="fas fa-thumbs-down"></i>
            <span>{dislike}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Posts;
