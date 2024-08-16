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
      <div className="register-container container-fluid row ">
        {/* <div className="side-hero"></div> */}

        <div className="app-desc col-4">
        
          <h3 className="collapseOnMobile">Fill the form and become part of our communities</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="col">
          <h1 className="mb-3 loginTitle">Welcome </h1>
          <p className="text-muted toRegisterRef">
            {"Don't have an account?"}
            <a className="text-primary m-2 goTo ">Register</a>
          </p>

          <div className="row container-fluid ">
            <div className="form-floating container row ">
              <div class="col">
    <label for="validationServer02" class="form-label">name</label>
    <input type="text" class="form-control is-valid reg-btn" id="validationServer02" value="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation reg-btn">
    
      <input type="text" class={`form-control reg-btn `} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required 
      {...register("username",{
        required: true
      })}
      />
      <div id="validationServerUsernameFeedback" class="invalid-feedback collapse">
        Please choose a username.
      </div>
    </div>
  </div>
            </div>
            {/* <div className="form-floating col">
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}}`}
                id="floatingInput2"
                placeholder="name"
                {...register("name", { required: true, pattern: /^\S+@\S+$/i })}
              />
              <label htmlFor="floatingInput2">name</label>
              <p className="invalid-feedback">name is invalid</p>
            </div> */}
          </div>
          <div className="form-floating m-2">
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}}`}
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <label htmlFor="floatingInput">Email</label>
            <p className="invalid-feedback">Email is invalid</p>
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

          <button className="w-100 btn primary-btn  btn-lg" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
