'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import MenuDesplegable from "../components/MenuDesplegable";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Module } from "@/core/interfaces/sidebar.interface";

interface MobileSidebarProps {
  modules: Module[];
  selectedModule: string | null;
  onItemSelect: (item: string) => void;
}

const MobileSidebar = ({ modules, selectedModule, onItemSelect }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button onClick={toggleSidebar} className="bg-gray-900 text-white">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>
            <VisuallyHidden>Menu</VisuallyHidden>
          </SheetTitle>
          <SheetDescription>
            <VisuallyHidden>Aquí puedes navegar por los diferentes módulos y submódulos.</VisuallyHidden>
          </SheetDescription>
          <div className="items-center justify-items-center h-full overflow-y-auto">
            <div className="text-center text-xl font-semibold mb-8">Terranova</div>

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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
