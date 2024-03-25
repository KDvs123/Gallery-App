import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PrivateRouteProps {
  children: React.ReactElement;
}
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  //   console.log(user);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
