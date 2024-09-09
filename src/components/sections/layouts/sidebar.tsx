'use client';
import React, { useState } from "react";
import MobileSidebar from "./Mobile/MobileSidebar";
import DesktopSidebar from "./Desktop/DesktopSidebar";
import usePermissions from "@/core/hooks/usePermissions";

const Sidebar = () => {
  const modules = usePermissions();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleItemSelect = (item: string) => {
    setSelectedModule(item);
  };

  return (
    <>
      <MobileSidebar
        modules={modules}
        selectedModule={selectedModule}
        onItemSelect={handleItemSelect}
      />
      <DesktopSidebar
        modules={modules}
        selectedModule={selectedModule}
        onItemSelect={handleItemSelect}
      />
    </>
  );
};

export default Sidebar;
