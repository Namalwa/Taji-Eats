import { FaUsers, FaShoppingCart, FaBoxOpen, FaStar, FaDollarSign, FaEye, FaPencilAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Chart } from "react-google-charts";
import Managu from "../../assets/managu.webp";
import Pagination from '@mui/material/Pagination';

const Dashboard = () => {
  const data = [
    ["Day", "Sales"],
    ["Week 1", 5000],
    ["Week 2", 7000],
    ["Week 3", 8000],
    ["Week 4", 12500],
  ];

  const options = {
    curveType: "function",
    legend: "none",
    hAxis: {
      textStyle: { color: "white" },
    },
    vAxis: {
      textStyle: { color: "white" },
    },
    backgroundColor: "transparent",
    colors: ["#ffffff"],
    chartArea: { width: "85%", height: "70%" },
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* Top Cards */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="bg-green-500 h-40 rounded-lg shadow-md p-4 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-2 w-20 h-20 border-t-4 border-l-4 border-green-300 transform rotate-[-20deg] opacity-30"></div>
          <div className="absolute top-4 left-16 w-20 h-20 border-t-4 border-l-4 border-green-300 transform rotate-[30deg] opacity-30"></div>
          <div className="flex justify-between items-center">
            <FaUsers className="text-3xl" />
            <BsThreeDotsVertical className="cursor-pointer text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">1,245</p>
            <p className="text-sm flex items-center">
              <LuArrowBigUp className="text-lg mr-1 text-green-300" /> +12.5% last month
            </p>
          </div>
        </div>

        <div className="bg-pink-500 h-40 rounded-lg shadow-md p-4 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-2 w-20 h-20 border-t-4 border-l-4 border-red-300 transform rotate-[-20deg] opacity-30"></div>
          <div className="absolute top-4 left-16 w-20 h-20 border-t-4 border-l-4 border-red-300 transform rotate-[30deg] opacity-30"></div>
          <div className="flex justify-between items-center">
            <FaShoppingCart className="text-3xl" />
            <BsThreeDotsVertical className="cursor-pointer text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">3,678</p>
            <p className="text-sm flex items-center">
              <LuArrowBigDown className="text-lg mr-1 text-red-300" /> -8.9% last month
            </p>
          </div>
        </div>

        <div className="bg-blue-500 h-40 rounded-lg shadow-md p-4 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-2 w-20 h-20 border-t-4 border-l-4 border-blue-300 transform rotate-[-20deg] opacity-30"></div>
          <div className="absolute top-4 left-16 w-20 h-20 border-t-4 border-l-4 border-blue-300 transform rotate-[30deg] opacity-30"></div>
          <div className="flex justify-between items-center">
            <FaBoxOpen className="text-3xl" />
            <BsThreeDotsVertical className="cursor-pointer text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">567</p>
            <p className="text-sm flex items-center">
              <LuArrowBigUp className="text-lg mr-1 text-blue-300" /> +5.2% last month
            </p>
          </div>
        </div>

        <div className="bg-yellow-500 h-40 rounded-lg shadow-md p-4 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-2 w-20 h-20 border-t-4 border-l-4 border-yellow-300 transform rotate-[-20deg] opacity-30"></div>
          <div className="absolute top-4 left-16 w-20 h-20 border-t-4 border-l-4 border-yellow-300 transform rotate-[30deg] opacity-30"></div>
          <div className="flex justify-between items-center">
            <FaStar className="text-3xl" />
            <BsThreeDotsVertical className="cursor-pointer text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Reviews</h2>
            <p className="text-2xl font-bold">2,890</p>
            <p className="text-sm flex items-center">
              <LuArrowBigUp className="text-lg mr-1 text-yellow-300" /> +10.3% last month
            </p>
          </div>
        </div>
      </div>

      {/* Sales Chart Card */}
      <div className="bg-orange-500 h-full rounded-xl shadow-md p-6 flex flex-col justify-between text-white relative">
        <div className="flex justify-between items-center">
          <FaDollarSign className="text-4xl" />
          <BsThreeDotsVertical className="cursor-pointer text-2xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Sales</h2>
          <p className="text-3xl font-bold">$125,678</p>
          <p className="text-sm flex items-center">
            <LuArrowBigUp className="text-lg mr-1 text-orange-300" /> +15.7% last month
          </p>
        </div>
        <div className="h-40">
          <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />
        </div>
      </div>

      {/* Responsive Table spanning full width with borders */}
      <div className="col-span-3 overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-700 text-white uppercase text-sm">
              <th className="p-3 border border-gray-300">UID</th>
              <th className="p-3 border border-gray-300">Product</th>
              <th className="p-3 border border-gray-300">Category</th>
              <th className="p-3 border border-gray-300">Price(KES)</th>
              <th className="p-3 border border-gray-300">Stock</th>
              <th className="p-3 border border-gray-300">Rating</th>
              <th className="p-3 border border-gray-300">Order</th>
              <th className="p-3 border border-gray-300">Sales</th>
              <th className="p-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-gray-100 hover:bg-gray-200 transition duration-200">
              <td className="p-3 border border-gray-300">#1</td>
              <td className="p-3 border border-gray-300 flex items-center space-x-2">
                <img
                  src={Managu}
                  alt="Managu"
                  className="w-10 h-10 object-cover rounded"
                />
                <span>Managu</span>
              </td>
              <td className="p-3 border border-gray-300">Vegetable</td>
              <td className="p-3 border border-gray-300">120</td>
              <td className="p-3 border border-gray-300">50</td>
              <td className="p-3 border border-gray-300">4.5</td>
              <td className="p-3 border border-gray-300">$30k</td>
              <td className="p-3 border border-gray-300">Tech Supplier</td>
              <td className="p-3 border border-gray-300 space-x-2">
                <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-700 transition">
                  <FaEye />
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                  <FaPencilAlt />
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                  <MdDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>showing <b>12</b> of <b>60</b> results </p>
        <Pagination count={10} color="primary" showFirstButton showLastButton/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
