import {
  LucideIcon,
  LayoutDashboardIcon,
  LayersIcon,
  FileChartColumnIncreasingIcon,
  SettingsIcon,
  MessageSquareMoreIcon,
} from "lucide-react";

export const Menu: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/dashboard", label: "Dasbor", icon: LayoutDashboardIcon },
  { href: "/dashboard/paket", label: "Paket Belanja", icon: LayersIcon },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: FileChartColumnIncreasingIcon,
  },
  { href: "/dashboard/setelan", label: "Setelan", icon: SettingsIcon },
  {
    href: "/dashboard/masukan",
    label: "Masukan",
    icon: MessageSquareMoreIcon,
  },
];
