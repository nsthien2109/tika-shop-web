import DashBoard from "./Screen/Admin/Dashboard";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import HomeAdmin from "./Screen/Admin/Screen/Home";
import UsersManagement from "./Screen/Admin/Screen/UsersManagement";
import StoresManagement from "./Screen/Admin/Screen/StoresManagement";
import { Routes, Route } from "react-router-dom";
import "../styles/Base.scss";
import CategoryManagement from "./Screen/Admin/Screen/CategoryManagement";
import BannerManagement from "./Screen/Admin/Screen/BannerManagement";
import OrderManagement from "./Screen/Admin/Screen/OrderManagement";
import ProductManagement from "./Screen/Admin/Screen/ProductManagement";

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
        <Route
          path="/admin-system/category-management"
          element={
            <DashBoard>
              <CategoryManagement />
            </DashBoard>
          }
        />
        <Route
          path="/admin-system/banner-management"
          element={
            <DashBoard>
              <BannerManagement />
            </DashBoard>
          }
        />
        <Route
          path="/admin-system/product-management"
          element={
            <DashBoard>
              <ProductManagement />
            </DashBoard>
          }
        />
        <Route
          path="/admin-system/order-management"
          element={
            <DashBoard>
              <OrderManagement />
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
