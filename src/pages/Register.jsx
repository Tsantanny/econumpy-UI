import "../styles/RegisterPage.css";
import logo from "../assets/images/logo.png";
import { useRegister } from "../components/useRegister";
function RegisterPage() {
  const {
    handleSubmit,
    register,
    handleClick,
    errors,
    navigateTo,
    handleRadioChange,
  } = useRegister();
  return (
    <>
      <div className="background"></div>
      <section className="main-container ">
        <section className="presentation text-white">
          <img src={logo} alt="" className="logo" />
          <h2 className="mt-4">Join Our Community for a Better Future</h2>
          <p>
            Be part of a community dedicated to sustainability, well-being, and
            shared growth. Create your account today and contribute to a
            platform focused on positive change. Together, we can build a
            healthier environment and a stronger community. Register now to
            begin your journey with us.
          </p>
        </section>
        <section className="register-container ">
          <h2>Create Your Account</h2>
          <p>
            Already have an account ?
            <a
              className="text-primary m-2 goTo "
              onClick={() => navigateTo("/login")}
            >
              Login
            </a>
          </p>
          <form onSubmit={handleSubmit(handleClick)}>
            <div className="d-flex u-name gap-4">
              <div className="form-floating  ">
                <input
                  type="text"
                  className={`form-control `}
                  id="floatingInputName"
                  placeholder="Name"
                  {...register("name")}
                  required
                />
                <label htmlFor="floatingInputName">Name</label>
              </div>
              <div className="form-floating  ">
                <input
                  type="text"
                  className={`form-control `}
                  id="floatingInputUsername"
                  placeholder="Username"
                  {...register("username")}
                  required
                />
                <label htmlFor="floatingInputUsername">Username</label>
              </div>
            </div>
            <div className="form-floating ">
              <input
                type="email"
                className={`form-control `}
                id="floatingInputEmail"
                placeholder="name@example.com"
                {...register("email")}
                required
              />
              <label htmlFor="floatingInputEmail">Email</label>
            </div>
            <div className="form-floating ">
              <input
                type="password"
                className={`form-control `}
                id="floatingInputPassword"
                placeholder="Paswwordm"
                {...register("password", {
                  required: true,
                  minLength: { value: 6 },
                })}
                required
              />
              <label htmlFor="floatingInputPassword">Password</label>
            </div>

            <div>
              <label>Account type :</label>
              <div className="form-check form-check-inline mx-3">
                <input
                  className="form-check-input"
                  onChange={(e) => handleRadioChange(e)}
                  type="radio"
                  name="category"
                  id="inlineRadio1"
                  value="individual"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Inidividual
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  onChange={(e) => handleRadioChange(e)}
                  type="radio"
                  name="category"
                  id="inlineRadio2"
                  value="organization"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Organization
                </label>
              </div>
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
