import { NavLink, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople, IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductPage from "./admin/addProductAdminPage";
import UpdateProductPage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPageAdmin";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[300px] h-full flex flex-col items-center">
        <span className="text-3xl font-bold my-5">Admin Panel</span>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <FaBoxArchive /> Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <GiShoppingBag /> Orders
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <IoPeople /> Users
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <IoSettings /> Settings
        </NavLink>
      </div>

      {/* Content */}
      <div className="w-[calc(100%-300px)] h-full">
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<ProductsAdminPage />} />
          <Route path="/newProduct" element={<AddProductPage />} />
          <Route path="/orders" element={<OrdersPageAdmin />} />
          <Route path="/updateProduct" element={<UpdateProductPage />} />
        </Routes>
      </div>
    </div>
  );
}
