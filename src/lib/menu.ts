import {
  LucideIcon,
  LayoutDashboardIcon,
  LayersIcon,
  FileChartColumnIncreasingIcon,
  SettingsIcon,
  MessageSquareMoreIcon,
  ShoppingCart,
  Wallet2,
  LayoutList,
  ClipboardList
} from "lucide-react";

export const Menu: {
  href: string;
  label: string;
  icon: LucideIcon,
  group?: string | null
}[] = [
    { href: "/dashboard", label: "Dasbor", icon: LayoutDashboardIcon },
    { href: "/dashboard/belanja", label: "Belanja", icon: ShoppingCart },
    { href: "/dashboard/pad", label: "Pendapatan", icon: Wallet2 },
    {
      href: "/dashboard/analytics",
      label: "Analytics",
      icon: FileChartColumnIncreasingIcon,
    },
    {
      href: "/dashboard/masukan",
      label: "Masukan",
      icon: MessageSquareMoreIcon,
    },
    {
      href: "",
      label: "",
      icon: SettingsIcon,
      group: "Setelan"
    },
    {
      href: "/dashboard/setelan/program",
      label: "Program",
      icon: LayoutList,
    },
    {
      href: "/dashboard/setelan/pad",
      label: "Pendapatan",
      icon: ClipboardList,
    },
  ];
