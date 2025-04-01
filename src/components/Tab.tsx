import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { BsBoxSeamFill } from "react-icons/bs";
import { GrUserNew } from "react-icons/gr";

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tab: FC<TabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <div
        className={`flex items-center space-x-1 cursor-pointer text-sm font-semibold ${activeTab === 'profile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveTab('profile')}
      >
        <FaUser />
        <span>Profile</span>
      </div>

      <div
        className={`flex items-center space-x-1 cursor-pointer text-sm font-semibold ${activeTab === 'user' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveTab('user')}
      >
        <HiUsers />
        <span>Users</span>
      </div>

      <div
        className={`flex items-center space-x-1 cursor-pointer text-sm font-semibold ${activeTab === 'product' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveTab('product')}
      >
        <BsBoxSeamFill />
        <span>Product</span>
      </div>
      <div
        className={`flex items-center space-x-1 cursor-pointer text-sm font-semibold ${activeTab === 'seller' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
        onClick={() => setActiveTab('seller')}
      >
        <GrUserNew />
        <span>Seller</span>
      </div>
      <button
          className='text-sm flex items-center py-1 px-4 bg-mainOrange text-white rounded-md hover:bg-hoverOrange focus:outline-none focus:ring-2 focus:ring-[#f9800f]'
        >
        <FiLogOut/>Log Out
      </button>
    </div>
  );
};

export default Tab;
