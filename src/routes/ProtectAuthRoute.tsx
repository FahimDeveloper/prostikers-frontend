import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const ProtectAuthRoute = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  return (
    <>{!user && !token ? children : <Navigate to={from} replace={true} />}</>
  );
};

export default ProtectAuthRoute;
