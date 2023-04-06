import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { Button, Input } from "@material-tailwind/react";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { auth } from "../../auth/firebase";
// import Input from "../../components/Input";
import Toast from "../../components/Toast";
import { useAppDispatch } from "../../hooks/useRedux";
import { getLogin } from "../../redux/login/loginSlice";
import { setUser } from "../../redux/user/userSlice";
import images from '../../assets/background.jpg'
// import { userInput } from './redux/loginSlice';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCre) => {
        const token = await userCre.user.getIdToken().then((item) => item);
        dispatch(getLogin({ token }))
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };
  const onCloseToast = () => {
    setError(false);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  return (
    <div>
      <div
        className="flex justify-center mt-48"
        style={{
          backgroundImage: images,
        }}
      >
        <div
          className={`w-[22%] h-[350px] border border-l-slate-500 shadow-xl  p-4 }`}
        >
          <div className="flex justify-center   ">
            <div className={`h-[100px] w-[150px]`}>
              <img
                src={logo}
                alt=""
                className="w-max h-full rounded-full"
              />
            </div>
          </div>
          <div className="p-7 grid grid-cols-1 gap-2 w-full ">
            <Input
              type="text"
              label="Email"
              onChange={onChangeEmail}
              size="lg"
            />

            <Input
              className=""
              type="password"
              label={"Password "}
              onChange={onChangePwd}
              size="lg"
            />
          </div>
          <div className="flex justify-center">
            <Button
              size="md"
              className="mr-3 hover:translate-y-3"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              color="indigo"
              className="    hover:translate-x-3"
              onClick={handleLogin}
            >
              Forgot
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-4 hover:transition duration-150 animate-pulse">
        {error === true ? (
          <Toast
            onClose={onCloseToast}
            content={"Email or Password is not correct !"}
            kindof="danger"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Login;
