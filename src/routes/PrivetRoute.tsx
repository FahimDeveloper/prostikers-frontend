import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }: { children: ReactElement }) => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  return (
    <>{user && token ? children : <Navigate to="/login" replace={true} />}</>
  );
};

export default PrivetRoute;