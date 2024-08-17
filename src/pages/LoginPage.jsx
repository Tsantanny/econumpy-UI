import { useLogin } from "../components/useLogin";
import logo from "../assets/images/logo.png";
import "../styles/LoginStyles.css";
import "../styles/global-style.css";
import "../styles/RegisterPage.css";

const LoginPage = () => {
  const { handleSubmit, register, handleClick, navigateTo, handleRadioChange, isError } = useLogin();

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
          <h2>Login</h2>
          <p>
            Don't have an account ?
            <a
              className="text-primary m-2 goTo "
              onClick={() => navigateTo("/register")}
            >
              Register
            </a>
          </p>
          <form onSubmit={handleSubmit(handleClick)}>
            <div className="form-floating ">
              <input
                type="email"
                className={`form-control ${isError && "is-invalid"}}`}
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                required
              />
              <label htmlFor="floatingInput">Email</label>
              <p className="invalid-feedback">Email is invalid</p>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className={`form-control ${isError && "is-invalid"}`}
                id="floatingPassword"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: { value: 6, message: "Password is required"},
                })}
              />
              <label htmlFor="floatingPassword">Password</label>
              <p className="invalid-feedback">Password is invalid</p>
            </div>

            <div>
              <label>Account type :</label>
              <div className="form-check form-check-inline mx-3">
                <input className="form-check-input" onChange={(e) => handleRadioChange(e)}  type="radio" name="category" id="inlineRadio1" value="individual"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Inidividual</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={(e) => handleRadioChange(e)}  type="radio" name="category" id="inlineRadio2" value="organization"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Organization</label>
              </div>
            </div>

            <button className="primary-btn mt-2">Submit</button>
          </form>
          <div className="extends"></div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
