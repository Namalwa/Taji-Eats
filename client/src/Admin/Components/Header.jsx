import { useState } from "react";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegBell, FaUserCircle, FaKey, FaSignOutAlt } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";

const notifications = [
  { id: 1, message: "New order received!", time: "2 mins ago" },
  { id: 2, message: "Your order has been shipped.", time: "1 hour ago" },
  { id: 3, message: "New message from support.", time: "Yesterday" },
];

const orders = [
  { id: 1, item: "Burger", quantity: 2, price: "$10", user: "Alice" },
  { id: 2, item: "Pizza", quantity: 1, price: "$15", user: "Bob" },
  { id: 3, item: "Soda", quantity: 3, price: "$5", user: "Charlie" },
];

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElBell, setAnchorElBell] = useState(null);
  const [anchorElCart, setAnchorElCart] = useState(null);

  const handleMenuOpen = (event, type) => {
    if (type === "user") setAnchorElUser(event.currentTarget);
    if (type === "bell") setAnchorElBell(event.currentTarget);
    if (type === "cart") setAnchorElCart(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    if (type === "user") setAnchorElUser(null);
    if (type === "bell") setAnchorElBell(null);
    if (type === "cart") setAnchorElCart(null);
  };

  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-8">
      <div className="flex items-center space-x-12">
        <h1 className="text-xl font-bold text-gray-800">Taji Eats</h1>
       
        <IconButton onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdMenuOpen className="text-xl text-gray-700" />
          ) : (
            <MdOutlineMenu className="text-xl text-gray-700" />
          )}
        </IconButton>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Quick Finding..."
          className="bg-[#f0f5ff] text-gray-700 text-sm px-10 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition w-52"
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
      </div>

      <div className="flex items-center space-x-6 ml-auto">
        <IconButton>
          <CiLight className="text-xl text-gray-700" />
        </IconButton>

        <IconButton onClick={(e) => handleMenuOpen(e, "cart")}>
          <Badge badgeContent={orders.length} color="error">
            <AiOutlineShoppingCart className="text-xl text-gray-700" />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorElCart}
          open={Boolean(anchorElCart)}
          onClose={() => handleMenuClose("cart")}
        >
          {orders.map((order) => (
            <MenuItem key={order.id}>
              <Avatar
                className="mr-2"
                src={`https://via.placeholder.com/30?text=${order.user}`}
              />
              {order.user}: {order.quantity}x {order.item} - {order.price}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem className="text-blue-500 font-semibold">
            View All Orders
          </MenuItem>
        </Menu>

        <IconButton onClick={(e) => handleMenuOpen(e, "bell")}>
          <Badge badgeContent={notifications.length} color="error">
            <FaRegBell className="text-xl text-gray-700" />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorElBell}
          open={Boolean(anchorElBell)}
          onClose={() => handleMenuClose("bell")}
        >
          {notifications.map((notif) => (
            <MenuItem key={notif.id}>
              {notif.message}{" "}
              <span className="text-xs text-gray-500 ml-2">({notif.time})</span>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem className="text-blue-500 font-semibold">
            View All Notifications
          </MenuItem>
        </Menu>

        <IconButton onClick={(e) => handleMenuOpen(e, "user")}>
          <Avatar src="https://via.placeholder.com/40" />
        </IconButton>
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={() => handleMenuClose("user")}
        >
          <MenuItem>
            <ListItemIcon>
              <FaUserCircle className="text-gray-700" />
            </ListItemIcon>
            My Account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FaKey className="text-gray-700" />
            </ListItemIcon>
            Reset Password
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FaSignOutAlt className="text-red-500" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
