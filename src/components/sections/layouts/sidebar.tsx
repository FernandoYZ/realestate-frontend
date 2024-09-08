'use client';
import React, { useEffect, useState } from "react";
import MobileSidebar from "./Mobile/MobileSidebar";
import DesktopSidebar from "./Desktop/DesktopSidebar";
import { getAllPermissions, Permission } from "@/core/services/permissionService";

interface Module {
  title: string;
  items: string[];
}

const Sidebar = () => {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const permissions: Permission[] = await getAllPermissions(); 
        const groupedModules: { [key: string]: string[] } = {};

        permissions.forEach((permission: Permission) => { 
          if (permission.status === "Activado") {
            const submodule = permission.submodule;
            const moduleName = permission.module; 

            if (!groupedModules[submodule]) {
              groupedModules[submodule] = [];
            }
            groupedModules[submodule].push(moduleName);
          }
        });
        
        const formattedModules: Module[] = Object.entries(groupedModules).map(([submodule, items]) => ({
          title: submodule,
          items,
        }));

        setModules(formattedModules);
      } catch (error) {
        console.error("Error al obtener permisos:", error);
      }
    };

    fetchPermissions();
  }, []);

  return (
    <>
      <MobileSidebar modules={modules} />
      <DesktopSidebar modules={modules} />
    </>
  );
};

export default Sidebar;
