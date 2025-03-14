import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Ensure this is correctly set up

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Using useAuth to check authentication

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
