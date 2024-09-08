'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

interface MenuDesplegableProps {
    title: string;
    items: string[];
  }
  
  const MenuDesplegable = ({ title, items }: MenuDesplegableProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="mb-4">
        <button
          onClick={toggleMenu}
          className="flex justify-between items-center w-full p-2 text-left text-white bg-gray-800 rounded-md hover:bg-gray-700"
        >
          <span>{title}</span>
          <ChevronDown
            size={16} 
            className={cn(
              "transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
  
        <div
          className={cn(
            "mt-2 space-y-2 pl-4 transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block p-2 text-gray-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default MenuDesplegable;