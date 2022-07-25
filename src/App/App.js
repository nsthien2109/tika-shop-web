import DashBoard from "./Screen/Admin/Dashboard";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import HomeAdmin from "./Screen/Admin/Screen/Home";
import UsersManagement from "./Screen/Admin/Screen/UsersManagement";
import StoresManagement from "./Screen/Admin/Screen/StoresManagement";
import { Routes, Route } from "react-router-dom";
import "../styles/Base.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admin-system"
          element={
            <DashBoard>
              <HomeAdmin />
            </DashBoard>
          }
        />
        <Route
          path="/admin-system/users-management"
          element={
            <DashBoard>
              <UsersManagement />
            </DashBoard>
          }
        />
        <Route
          path="/admin-system/stores-management"
          element={
            <DashBoard>
              <StoresManagement />
            </DashBoard>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
