import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/imageSVG/logo.svg';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/imageSVG/homeIcon.svg'
import ProductIcon from '../../assets/imageSVG/productMenuIcon.svg'
import SalesIcon from '../../assets/imageSVG/sales1menuIcon.svg'
import FacturationIcon from '../../assets/imageSVG/facturationMenuIcon.svg'
import CustomerIcon from '../../assets/imageSVG/customerMenuIcon.svg'
import AdsIcon from '../../assets/imageSVG/adsMenuIcon.svg'
import InventoryIcon from '../../assets/imageSVG/inventoryMenuIcon.svg'
import ShopIcon from '../../assets/imageSVG/sheetsMenuIcon.svg'
import WarehouseIcon from '../../assets/imageSVG/warehouseMenuIcon.svg'
import UsersIcon from '../../assets/imageSVG/userMenuIcon.svg'
import SheetsIcon from '../../assets/imageSVG/sheetsMenuIcon.svg'
import SettingsIcon from '../../assets/imageSVG/settingsMenuIcon.svg'
import LogoutIcon from '../../assets/imageSVG/logoutMenuIcon.svg'
import FollowupIcon from '../../assets/imageSVG/folllowUpMeniIcon.svg'
import ReconfirmedIcon from '../../assets/imageSVG/reconfirmedMenuIcon.svg'

// Menu items
const MenuItems = [
    { id: 0, icon: <img src={HomeIcon} />, label: 'Dashboard', path: '' },
    { id: 1, icon: <img src={ProductIcon} />, label: 'Product', path: '/product' },
    { id: 2, icon: <img src={SalesIcon} />, label: 'Sales', path: '/sales' },
    { id: 3, icon: <img src={FacturationIcon} />, label: 'Facturation', path: '/facturation' },
    { id: 4, icon: <img src={CustomerIcon} />, label: 'Customers', path: '/customers' },
    { id: 5, icon: <img src={AdsIcon} />, label: 'Ads', path: '/ads' },
    { id: 6, icon: <img src={InventoryIcon} />, label: 'Inventory', path: '/inventory' },
    { id: 7, icon: <img src={ShopIcon} />, label: 'Shop', path: '/shop' },
    { id: 8, icon: <img src={WarehouseIcon} />, label: 'Warehouse', path: '/warehouse' },
    { id: 9, icon: <img src={UsersIcon} />, label: 'Users', path: '/user-list' },
    { id: 11, icon: <img src={SheetsIcon} />, label: 'Sheets', path: '/sheets' },
    { id: 10, icon: <img src={SettingsIcon} />, label: 'Settings', path: '/settings' }
];
// Menu items Admin
const MenuItemsAdmin = [
    { id: 0, icon: <img src={HomeIcon} />, label: 'Dashboard', path: '/admin' },
    { id: 1, icon: <img src={FollowupIcon} />, label: 'Follow up', path: '/admin-follow-up' },
    { id: 2, icon: <img src={ReconfirmedIcon} />, label: 'Reconfirmed', path: '/re-confirmed' },
    { id: 3, icon: <img src={SettingsIcon} />, label: 'Settings', path: '/settings' }
];
// Dashboard submenu
const dashboardSubMenu = [
    { id: 0.1, label: 'Confirmation Rate', path: '/' },
    { id: 0.2, label: 'Delivery Rate', path: '/deliveryRate' },
    { id: 0.3, label: 'Analytics', path: '/analytics' }
];
// User submenu
const dashboardSubMenu2 = [
    { id: 9.1, label: 'User List', path: '/user-list' },
    { id: 9.2, label: 'Role List', path: '/role-list' },
];
// sales submenu
const dashboardSubMenu3 = [
    { id: 2.1, label: 'Total leads', path: '/sales' },
    { id: 2.2, label: 'FB pages lead', path: '/fb-leads' },
    { id: 2.3, label: 'Orders', path: '/orders' },
    { id: 2.4, label: 'Follow up', path: '/follow-up' },
];

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
    const [showSubMenu2, setShowSubMenu2] = useState<boolean>(false);
    const [showSubMenu3, setShowSubMenu3] = useState<boolean>(false);
    const [role, setRole] = useState<string>("Admin");
    const sidebarRef = useRef<HTMLDivElement>(null);
    const handleMenuClick = (itemId: number) => {
        
        setSelectedItem(itemId);
        setShowSubMenu(itemId === 0); // Show submenu for the "Dashboard menu"
        setShowSubMenu3(itemId === 2); // Show submenu for the "sales menu" 
        setShowSubMenu2(itemId === 9); // Show submenu for the "Users menu" 
    };

  // Handle click outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            // Optionally, you could reset the selectedItem if you want to deselect when clicking outside
            // setSelectedItem(null);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
    return (
        <section className="flex relative">
        {/* Sidebar */}
        <div className="flex flex-col justify-between bg-white h-screen lg:w-72 w-20 transition-all duration-300">
          <div className="px-4 py-6">
            {/* Logo */}
            <div className="grid place-content-center lg:h-10 lg:w-32 w-10 ml-5">
              <img src={Logo} alt="Logo" />
            </div>
      
            {/* Menu Items */}
            {role !== "Admin" ? (
              <ul className="mt-6 space-y-2">
                {MenuItems?.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 relative rounded-lg group">
                    <div
                      className={`h-6 w-1 ${
                        selectedItem === item.id ? 'bg-[#00B074]' : 'bg-transparent'
                      } rounded-md`}
                    ></div>
                    <li className="w-full flex items-center rounded-lg">
                      <Link
                        to={item?.path}
                        onClick={() => handleMenuClick(item.id)}
                        className={`flex items-center gap-2 lg:gap-10 rounded-lg px-4 py-2 text-sm font-medium ${
                          selectedItem === item.id
                            ? 'text-[#00B074] bg-[#00B07426] justify-between'
                            : 'text-[#464255]'
                        } w-full`}
                      >
                        <span className='w-6 h-6'>{item.icon}</span>
                        <span className="hidden lg:inline">{item.label}</span>
                        {item.id === selectedItem && <span> &gt; </span>}
                      </Link>
                    </li>
      
                    {/* Submenu for Dashboard */}
                    {item.id === 0 && (
                      <div className="absolute left-full top-0 bg-white shadow-lg w-64 p-4 z-50 rounded-xl hidden group-hover:block">
                        <ul className="space-y-2 divide-y">
                          {dashboardSubMenu.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.id === 9 && (
                      <div className="absolute left-full top-0 bg-white shadow-lg w-64 p-4 z-50 rounded-xl hidden group-hover:block">
                        <ul className="space-y-2 divide-y">
                          {dashboardSubMenu2.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.id === 2 && (
                      <div className="absolute left-full top-0 bg-white shadow-lg w-64 p-4 z-50 rounded-xl hidden group-hover:block">
                        <ul className="space-y-2 divide-y">
                          {dashboardSubMenu3.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
      
                {/* Logout */}
                <li>
                  <Link to="/login" className="flex items-center gap-3 rounded-lg px-4 py-2 ml-6 text-sm font-medium text-gray-700">
                    <img src={LogoutIcon} />
                    <span className="text-red-500 hidden lg:inline ml-8">Logout</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <>
                <ul className="mt-6 space-y-2">
                  {MenuItemsAdmin?.map((item) => (
                    <div key={item.id} className="flex items-center gap-5 relative rounded-lg group">
                      <div
                        className={`h-6 w-1 ${
                          selectedItem === item.id ? 'bg-[#00B074]' : 'bg-transparent'
                        } rounded-md`}
                      ></div>
                      <li className="w-full flex items-center">
                        <Link
                          to={item?.path}
                          onClick={() => handleMenuClick(item.id)}
                          className={`flex items-center gap-2 lg:gap-10 rounded-lg px-4 py-2 text-sm font-medium ${
                            selectedItem === item.id
                              ? 'text-[#00B074] bg-[#00B07426]'
                              : 'text-[#464255]'
                          } w-full`}
                        >
                          <span>{item.icon}</span>
                          <span className="hidden lg:inline">{item.label}</span>
                        </Link>
                      </li>
                    </div>
                  ))}
                  <li>
                    <Link to="/login" className="flex items-center gap-3 rounded-lg px-4 py-2 ml-6 text-sm font-medium text-gray-700">
                      <img src={LogoutIcon} />
                      <span className="text-red-500 hidden lg:inline ml-8">Logout</span>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
      
    );
};

export default Sidebar;
