'use client';

import { useState } from "react";
import MenuDesplegable from "../components/MenuDesplegable";
import { Module } from "@/core/interfaces/sidebar.interface";

interface DesktopSidebarProps {
  modules: Module[];
  selectedModule: string | null;
  onItemSelect: (item: string) => void;
}

const DesktopSidebar = ({ modules, selectedModule, onItemSelect }: DesktopSidebarProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleToggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index); 
  };

  return (
    <aside className="hidden lg:flex lg:flex-col lg:h-screen lg:w-64 lg:bg-white lg:text-black lg:p-4 lg:overflow-y-auto lg:fixed shadow-md">
      <div className="text-xl text-center font-semibold mb-8 uppercase">Inmobiliaria</div>

      {modules.map((module, index) => {
        const IconComponent = module.icon;
        return (
          <MenuDesplegable
            key={index}
            title={module.title}
            items={module.items}
            isOpen={openMenuIndex === index}
            onToggle={() => handleToggleMenu(index)}
            selectedModule={selectedModule}
            onItemSelect={onItemSelect}
            icon={IconComponent ? <IconComponent /> : null} 
          />
        );
      })}

      <div className="mt-auto bg-red-50">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
          Upgrade Account
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
