import { useLogin } from "../components/LoginPage";
import "../styles/LoginStyles.css";

export const LoginPage = () => {
  const { handleSubmit, register, handleClick, errors } = useLogin();

  return (
    <>
      <div className="form-signin rounded">
        <form onSubmit={handleSubmit(handleClick)}>
          <h1 className="mb-3 fw-normal">Welcome back</h1>
          <p className="text-muted">
            {"Don't have an account?"}
            <a className="text-primary mx-1">Register</a>
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
              {...register("password", { required: true })}
            />
            <label htmlFor="floatingPassword">Password</label>
            <p className="invalid-feedback">Password is invalid</p>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};
