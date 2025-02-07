import { useState } from "react";
import Button from "@mui/material/Button";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrProductHunt } from "react-icons/gr";
import { FaCartArrowDown, FaBell, FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { MdMessage, MdOutlineDomainVerification } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="h-full w-64 bg-white shadow-md p-4">
      <ul className="space-y-2">
        <li>
          <Button fullWidth onClick={() => handleNavigation("/dashboard")} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <LuLayoutDashboard className="text-xl" />
            <span className="flex-1 text-left pl-3">Dashboard</span>
            <FaAngleRight className="text-sm" />
          </Button>
        </li>
        <li>
          <Button fullWidth onClick={() => setOpenProducts(!openProducts)} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <GrProductHunt className="text-xl" />
            <span className="flex-1 text-left pl-3">Products</span>
            {openProducts ? <FaAngleDown className="text-sm" /> : <FaAngleRight className="text-sm" />}
          </Button>
          {openProducts && (
            <ul className="bg-gray-50 rounded-md shadow-inner p-2 mt-2 space-y-1">
              <li>
                <Button fullWidth onClick={() => handleNavigation("/product-list")} className="flex items-center text-gray-600 p-2 rounded-md hover:bg-gray-100">
                  Product List
                </Button>
              </li>
              <li>
                <Button fullWidth onClick={() => handleNavigation("/product-view")} className="flex items-center text-gray-600 p-2 rounded-md hover:bg-gray-100">
                  Product View
                </Button>
              </li>
              <li>
                <Button fullWidth onClick={() => handleNavigation("/product-upload")} className="flex items-center text-gray-600 p-2 rounded-md hover:bg-gray-100">
                  Product Upload
                </Button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Button fullWidth onClick={() => setOpenAuth(!openAuth)} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <MdOutlineDomainVerification className="text-xl" />
            <span className="flex-1 text-left pl-3">Authentication</span>
            {openAuth ? <FaAngleDown className="text-sm" /> : <FaAngleRight className="text-sm" />}
          </Button>
          {openAuth && (
            <ul className="bg-gray-50 rounded-md shadow-inner p-2 mt-2 space-y-1">
              <li>
                <Button fullWidth onClick={() => handleNavigation("/login")} className="flex items-center text-gray-600 p-2 rounded-md hover:bg-gray-100">
                  Sign In
                </Button>
              </li>
              <li>
                <Button fullWidth onClick={() => handleNavigation("/signup")} className="flex items-center text-gray-600 p-2 rounded-md hover:bg-gray-100">
                  Sign Up
                </Button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Button fullWidth onClick={() => handleNavigation("/orders")} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <FaCartArrowDown className="text-xl" />
            <span className="flex-1 text-left pl-3">Orders</span>
            <FaAngleRight className="text-sm" />
          </Button>
        </li>
        <li>
          <Button fullWidth onClick={() => handleNavigation("/messages")} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <MdMessage className="text-xl" />
            <span className="flex-1 text-left pl-3">Messages</span>
            <FaAngleRight className="text-sm" />
          </Button>
        </li>
        <li>
          <Button fullWidth onClick={() => handleNavigation("/notifications")} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <FaBell className="text-xl" />
            <span className="flex-1 text-left pl-3">Notifications</span>
            <FaAngleRight className="text-sm" />
          </Button>
        </li>
        <li>
          <Button fullWidth onClick={() => handleNavigation("/settings")} className="flex items-center justify-between text-gray-700 p-3 rounded-md hover:bg-gray-100">
            <IoMdSettings className="text-xl" />
            <span className="flex-1 text-left pl-3">Settings</span>
            <FaAngleRight className="text-sm" />
          </Button>
        </li>
      </ul>
      <br />
      <Button variant="contained" color="primary" fullWidth className="mt-4 flex items-center justify-center space-x-2">
        <RiLogoutCircleRLine className="text-xl" />
        <span>Logout</span>
      </Button>
    </div>
  );
};

export default Sidebar;
