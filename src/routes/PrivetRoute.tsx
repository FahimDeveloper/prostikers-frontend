import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  return (
    <>
      {user && token ? (
        children
      ) : (
        <Navigate to="/login" replace={true} state={{ from: location }} />
      )}
    </>
  );
};

export default PrivetRoute;
