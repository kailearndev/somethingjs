import { onAuthStateChanged } from "@firebase/auth";
import { async } from "@firebase/util";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useRedux";
import { getLoginSelector } from "../redux/login/loginSlice";
import { getUserSelector, setUser } from "../redux/user/userSlice";
import { auth } from "./firebase";

interface PrivateProps {
  children: React.ReactNode;
  // isLogged: boolean
}

const Private: FC<PrivateProps> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useSelector(getLoginSelector);

  const { children } = props;
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        dispatch(
          setUser({
            isLogged: true,
            accessToken: token,
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            metaData: {
              createdAt: "",
              creationTime: user.metadata.creationTime,
              lastLoginAt: "",
              lastSignInTime: user.metadata.lastSignInTime,
            },
          })
        );
      } else {
        // return <Navigate to="/login" replace />;
      }
    });
  }, [token]);

  useEffect(() => {
    if (!localStorage.getItem("token") || !token) {
      localStorage.removeItem("token");
      navigate("/login", {
        replace: true,
      });
    }
  }, [token]);
  return <div>{children}</div>;
};

export default Private;
