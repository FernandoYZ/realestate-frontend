'use client';

import { ChevronDown, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuDesplegableProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  selectedModule: string | null;
  onItemSelect: (item: string) => void;
  icon?: React.ReactNode;
}

const MenuDesplegable = ({
  title,
  items,
  isOpen,
  onToggle,
  selectedModule,
  onItemSelect,
  icon,
}: MenuDesplegableProps) => {
  const isModuleSelected = selectedModule === title || items.includes(selectedModule!);

  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className={cn(
          "flex justify-between text-sm items-center w-full p-2 pl-4 text-left rounded-md font-medium",
          isModuleSelected ? "bg-indigo-100 text-indigo-600" : "text-gray-800 hover:bg-gray-100"
        )}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {icon && (
            <span className={cn(
              "mr-4 w-6 h-6", 
              isModuleSelected ? "text-indigo-600" : ""
            )}>
              {icon}
            </span>
          )}
          <span>{title}</span>
        </div>
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
          "space-y-1 transition-all duration-300 overflow-hidden text-sm mt-1 font-medium text-gray-800",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
        aria-hidden={!isOpen}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={() => onItemSelect(item)}
            className={cn(
              "block p-2 rounded-md pl-6 flex items-center",
              selectedModule === item ? "bg-indigo-50 text-indigo-600" : "hover:bg-gray-100",
              selectedModule === item ? "no-hover" : ""
            )}
          >
            <Circle className="h-[6px] w-[6px] mr-4" />
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuDesplegable;
