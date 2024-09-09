import { useEffect, useState } from "react";
import { getAllPermissions, Permission } from "@/core/services/permissionService";
import { Module } from "@/core/interfaces/sidebar.interface";
import { AjustesIcon, FacturacionIcon, LogisticaIcon, ReporteIcon, SeguridadIcon, ServicioIcon, TesoreriaIcon } from "../../../public/images";

const usePermissions = () => {
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

        const iconMap: { [key: string]: React.ElementType } = {
          Facturación: FacturacionIcon,
          Seguridad: SeguridadIcon,
          Logística: LogisticaIcon,
          Tesorería: TesoreriaIcon,
          Ajustes: AjustesIcon,
          Reportes: ReporteIcon,
          Servicios: ServicioIcon,
        };

        const formattedModules: Module[] = Object.entries(groupedModules).map(([submodule, items]) => ({
          title: submodule,
          items,
          icon: iconMap[submodule],
        }));

        setModules(formattedModules);
      } catch (error) {
        console.error("Error al obtener permisos:", error);
      }
    };

    fetchPermissions();
  }, []);

  return modules;
};

export default usePermissions;
