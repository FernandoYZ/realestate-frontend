'use client';

import { useState } from "react";
import MenuDesplegable from "../components/MenuDesplegable";

interface Module {
  title: string;
  items: string[];
}

interface DesktopSidebarProps {
  modules: Module[];
}

const DesktopSidebar = ({ modules }: DesktopSidebarProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleToggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index); 
  };

  return (
    <div className="hidden lg:flex lg:flex-col lg:h-screen lg:w-64 lg:bg-gray-900 lg:text-white lg:p-4 lg:overflow-y-auto lg:fixed">
      <h1 className="text-2xl font-semibold mb-8">Sidebar</h1>

      {modules.map((module, index) => (
        <MenuDesplegable
          key={index}
          title={module.title}
          items={module.items}
          isOpen={openMenuIndex === index}
          onToggle={() => handleToggleMenu(index)}
        />
      ))}

      <div className="mt-auto">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
          Upgrade Account
        </button>
      </div>
    </div>
  );
};

export default DesktopSidebar;
