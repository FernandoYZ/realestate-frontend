import MobileSidebar from "./Mobile/MobileSidebar";
import DesktopSidebar from "./Desktop/DesktopSidebar";

interface Module {
  title: string;
  items: string[];
}

const modules: Module[] = [
  {
    title: "Módulo 1",
    items: ["SubItem 1", "SubItem 2", "SubItem 3"],
  },
  {
    title: "Módulo 2",
    items: ["SubItem A", "SubItem B", "SubItem C"],
  },
  {
    title: "Módulo 3",
    items: ["SubItem X", "SubItem Y", "SubItem Z"],
  },
  {
    title: "Módulo 4",
    items: ["SubItem 1", "SubItem 2", "SubItem 3"],
  },
  {
    title: "Módulo 5",
    items: ["SubItem A", "SubItem B", "SubItem C"],
  },
];

const Sidebar = () => {
  return (
    <>
      <MobileSidebar modules={modules} />
      <DesktopSidebar modules={modules} />
    </>
  );
};

export default Sidebar;
