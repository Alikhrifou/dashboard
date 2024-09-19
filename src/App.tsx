
import { Routes, Route } from 'react-router-dom'; import Layout from './layout'
import ConfirmationRate from './pages/Dashboard/ConfirmationRate';
import DeliveryRate from './pages/Dashboard/DeliveryRate';
import Analytics from './pages/Dashboard/Analytics';
import Sales from './pages/Sales/TotalLeads';
import Orders from './pages/Sales/Orders';
import FollowUp from './pages/Sales/FollowUp';
import FbLeades from './pages/Sales/FbLeads';
import Login from './pages/Login';
import Product from './pages/ProductList';
import UserList from './pages/Users/UserList';
import RoleList from './pages/Users/RoleList';
import AdsComponent from './pages/Ads';
import InventoryComponent from './pages/Inventory';
import ShopComponent from './pages/Shop';
import WarehouseComponent from './pages/Warehose';
import WSheetsComponent from './pages/Sheets';
import AdminDashboard from './pages/Admin/dashboard';
import FollowUP from './pages/Admin/FollowUp';
import Reconfirmed from './pages/Admin/Reconfirmed';

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ConfirmationRate />} />
          <Route path="/deliveryRate" element={<DeliveryRate />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/fb-leads" element={<FbLeades />} />
          <Route path="/follow-up" element={<FollowUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/role-list" element={<RoleList />} />
          <Route path="/ads" element={<AdsComponent />} />
          <Route path="/inventory" element={<InventoryComponent />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/warehouse" element={<WarehouseComponent />} />
          <Route path="/sheets" element={<WSheetsComponent />} />

          {/* adminRoutes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-follow-up" element={<FollowUP />} />
          <Route path="/re-confirmed" element={<Reconfirmed />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>


    </>
  )
}

export default App
