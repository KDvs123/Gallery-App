import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/Auth";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/login" element={<PublicRoute >
          <Login/>
        </PublicRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
