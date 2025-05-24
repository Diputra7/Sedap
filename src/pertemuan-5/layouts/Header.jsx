import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            {/* Search Bar */}
            <div id="search-bar" className="relative w-full max-w-lg">
                <input className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch id="search-icon" className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none" />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-4">
                {/* Icons */}
                <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <FaBell />
                    <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                </div>
                <div id="chart-icon" className="	
p-3 bg-blue-100 rounded-2xl cursor-pointer">
                    <FcAreaChart />
                </div>
                <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                    <SlSettings />
                </div>
             

                {/* Profile Section */}
                <div id="profile-container" className="	
flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span id="profile-text">
                        Alo, <b>Fik</b>
                    </span>
                    <img
                        id="profile-avatar" 
                        src="data:image/jpeg;base64,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"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
