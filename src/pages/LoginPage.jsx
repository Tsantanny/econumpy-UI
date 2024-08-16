import { useLogin } from "../components/useLogin";
import imgLeaf from "../../public/leaf.png";
import "../styles/LoginStyles.css";
import "../styles/global-style.css";

const LoginPage = () => {
  const { handleSubmit, register, handleClick, errors } = useLogin();

  return (
    <div className="container">
      <img src={imgLeaf} alt="leaf image" />

      <div className="form-signin rounded">
        <form onSubmit={handleSubmit(handleClick)}>
          <h1 className="mb-3 loginTitle">Welcome back</h1>
          <p className="text-muted toRegisterRef">
            {"Don't have an account?"}
            <a className="text-primary m-2 goTo ">Register</a>
          </p>

          <div className="form-floating m-2">
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}}`}
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <label htmlFor="floatingInput">Email</label>
            <p className="invalid-feedback">Username is invalid</p>
          </div>

          <div className="form-floating m-2">
            <input
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              id="floatingPassword"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: { value: 8 },
              })}
            />
            <label htmlFor="floatingPassword">Password</label>
            <p className="invalid-feedback">Password is invalid</p>
          </div>

          <button className="w-100 btn primary-btn mt-4 btn-lg" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;