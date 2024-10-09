import {
  LucideIcon,
  LayoutDashboardIcon,
  LayersIcon,
  FileChartColumnIncreasingIcon,
  SettingsIcon,
  MessageSquareMoreIcon,
  ShoppingCart,
  Wallet2,
} from "lucide-react";

export const Menu: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/dashboard", label: "Dasbor", icon: LayoutDashboardIcon },
  { href: "/dashboard/belanja", label: "Belanja", icon: ShoppingCart },
  { href: "/dashboard/pad", label: "Pendapatan", icon: Wallet2 },
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
