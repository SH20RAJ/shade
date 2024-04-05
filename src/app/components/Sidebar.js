// Sidebar.js
import {sidebarData} from "./../contants/sidebar"

const Sidebar = () => {
    return (
      <div className="bg-base-100		 h-full w-16 fixed left-0 top-0 flex flex-col items-center">
        {sidebarData.map((item, index) => (
          <div key={index} className="flex flex-col items-center mt-8">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">{item.icon}</span>
            </div>
            <span className="text-gray-300 mt-2">{item.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  