import "../styles/RegisterPage.css";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <div className="register-container container-fluid row">
        {/* <div className="side-hero"></div> */}

        <div className="app-desc col-4">
          <p>welcome</p>
          <h3>Fill the form and become part of our communities</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container container p-3 border rounded-3 col-6 text-center">
          <h1 className="m-3">Sign in </h1>

          <div className="container name-username row row-cols-3">
            <span className="reg-btn">
              <p className="fw-bold">Name</p>
              <input
                type="text"
                name="nameInput"
                className="form-control to-be-verified reg-btn"
                id="name"
                placeholder="your name here..."
                {...register("uname", {
                  required: "please fill out this field",
                  minLength: {
                    value: 3,
                    message: "too short",
                  },
                })}
              />
            </span>
            <span>
              <p className="fw-bold ">Username</p>
              <input
                type="text"
                name="UsernameInput"
                className="form-control to-be-verified reg-btn"
                id="Username"
                placeholder="ex :Username2123"
                {...register("userName", {
                  required: "please put your username here ",
                  minLength: {
                    value: 5,
                    message: "too short",
                  },
                })}
              />
            </span>
          </div>
          <div className="email-cont container">
            <p className="fw-bold text-start">email</p>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control to-be-verified reg-btn"
              placeholder="name@example.com"
              {...register("email", {
                required: "please put your email here ",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
          </div>
          <div className="password-cont container">
            <p className="fw-bold text-start">password</p>
            <input
              type="password"
              name="password"
              className="form-control to-be-verified reg-btn"
              id="password"
              {...register("password", {
                required: "type your password here",
                minLength: {
                  value: 5,
                  message: "too weak",
                },
              })}
            />
          </div>
          <div className="password-cont container">
            <p className="fw-bold text-start">password confirmation</p>
            <input
              type="password"
              name="password"
              className="form-control to-be-verified reg-btn"
              id="password"
              {...register("passwordConfirmation", {
                required: "type your password here",
                minLength: {
                  value: 5,
                  message: "too weak",
                },
              })}
            />
          </div>
          <div className="term-and-conditions form-check">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="form-check-input"
            />
            <label className="small form-check-label " for="check">
              {" "}
              I agree with MyToDos's Terms of Service, Privacy Policy, and
              default Notification Settings.{" "}
            </label>
            <div
              className="invalid-feedback"
              defaultChecked={true}
              //   onClick={handleConditionsOfUse}
            >
              you must agree before sign in
            </div>
          </div>
          <div>
            <button
              // onClick={handleRegister}
              // disabled={handleEnableSubmit}
              className="btn btn-dark btn-lg"
              id="submitBtn"
              type="submit"
            >
              create account
            </button>
            <div className="charging-container">
              <img
                src="https://www.freeiconspng.com/uploads/loading-icon-png-2.png"
                className="ratio ratio-1x1 loading collapse"
                id="loading"
                alt="charging"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
