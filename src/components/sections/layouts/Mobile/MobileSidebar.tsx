'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import MenuDesplegable from "../components/MenuDesplegable";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Module {
  title: string;
  items: string[];
}

interface MobileSidebarProps {
  modules: Module[];
}

const MobileSidebar = ({ modules }: MobileSidebarProps) => {
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
          <div className="p-4 h-full overflow-y-auto">
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

            <SheetClose asChild>
              <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Close</Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
