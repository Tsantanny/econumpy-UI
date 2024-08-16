import "../styles/Posts.css";
import user from "../assets/images/user.jpeg";
function Posts() {
  return (
    <>
      <section className="post-container box-shadow">
        <div className="post-header">
          <div className="profile">
            <img src={user} alt="" className="user" />
            <span>Emilie</span>
          </div>
          <span className="date">Pubished on : 20/05/10</span>
        </div>
        <div className="post-content mt-4">
          <div className="title">
            <span className="title-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="tag">Environment</span>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur corporis nisi, reprehenderit dicta quibusdam, quos
            cupiditate, numquam omnis perspiciatis dolorum error enim in
            repellat quasi hic consequuntur eos eum vitae!
          </p>
        </div>
        <div className="reaction-panel">
          <div>
            <i className="fas fa-thumbs-up"></i>
            <span>20</span>
          </div>
          <div>
            <i className="fas fa-thumbs-down"></i>
            <span>150</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Posts;
