import { Navigate } from 'react-router-dom';

function PrivateRoute({ token, children }) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
