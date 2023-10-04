import React, { useContext, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import ReCAPTCHA from "react-google-recaptcha";
import { AdminContext } from "../../provider/AdminProvider";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [rcWarning, setRCWarning] = useState(false);

  const { login, loading, setLoading, user } = useContext(AdminContext);

  const navigate = useNavigate();

  if (user) navigate("/admin/dashboard/student-information");

  const onChange = (value) => {
    setRecaptchaValue(value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!recaptchaValue) return setRCWarning(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const userTemp = userCredential.user;
        console.log(userTemp);
        navigate("/admin/dashboard/student-information");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`${err}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    form.reset();
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <Card color="transparent" shadow={false} className="p-4">
        <Typography variant="h4" color="blue-gray">
          <Link to="/">
            <img
              src="/png/deshiit.png"
              alt="IT image"
              className="bg-[#013c57] rounded-xl w-[150px] mb-3"
            />
          </Link>
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={formSubmitHandler}
        >
          <div className="mb-4 flex flex-col gap-2">
            <Input type="email" name="email" size="lg" label="Email" required />
            <Input
              type="password"
              size="lg"
              name="password"
              label="Password"
              required
            />
          </div>

          <div>
            <ReCAPTCHA
              sitekey={`${import.meta.env.VITE_googleRecaptchaSiteKey}`}
              onChange={onChange}
            />
            {rcWarning && (
              <span className="text-red-900 text-sm font-bold">
                Re-captcha is not checked
              </span>
            )}
          </div>
          <Button
            className="mt-6 flex items-center justify-center"
            fullWidth
            type="submit"
          >
            {loading ? (
              <Oval
                height={16}
                width={16}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              <span>Login</span>
            )}
          </Button>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
