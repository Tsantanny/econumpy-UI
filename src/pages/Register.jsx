import "../styles/RegisterPage.css";
import logo from "../assets/images/logo.png";
function RegisterPage() {
  return (
    <>
      <div className="background"></div>
      <section className="main-container ">
        <section className="presentation text-white">
          <img src={logo} alt="" className="logo" />
          <h2 className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            molestiae sit iste
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            commodi minima a est animi saepe tempore sed excepturi dolorem
            voluptatibus numquam, perferendis consequatur? Beatae totam numquam
          </p>
        </section>
        <section className="register-container ">
          <h2>Create Your Account</h2>
          <p>
            Already have an account ? <span>Login</span>
          </p>
          <form>
            <div className="d-flex u-name gap-4">
              <div className="form-floating  ">
                <input
                  type="email"
                  className={`form-control `}
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">name</label>
              </div>
              <div className="form-floating  ">
                <input
                  type="email"
                  className={`form-control `}
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">username</label>
              </div>
            </div>
            <div className="form-floating ">
              <input
                type="email"
                className={`form-control `}
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">email</label>
            </div>
            <div className="form-floating ">
              <input
                type="email"
                className={`form-control `}
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">password</label>
            </div>

            <button className="primary-btn mt-2">Submit</button>
          </form>
          <div className="extends"></div>
        </section>
      </section>
    </>
  );
}

export default RegisterPage;
