"use client";

import {
  CircleUser,
  Package2,
  Search,
  AlignJustify,
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "@/lib/menu";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
export function TopNav({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const CurrentPage = usePathname();
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 md:border-b bg-background px-4 md:px-6 z-50">
        <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <AlignJustify className="h-6 w-6" />
          </Button>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="text-nowrap">Acme Inc</span>
          </Link>
        </div>
        <div className="flex w-full items-center justify-between gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="w-full">
            <form className="m-auto flex-1 max-w-[700px]">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search paket..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[700px] rounded-full"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div
        className={cn(
          "grid w-full min-h-screen",
          isMinimized
            ? "md:grid-cols-[70px_1fr]"
            : "md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]",
        )}
      >
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex max-h-screen flex-col gap-2">
            <div className="flex-1">
              <ScrollArea className="max-h-screen">
                {!isMinimized ? (
                  <nav className="grid items-start p-4 text-sm font-medium lg:px-4">
                    {Menu.map((item) => (
                      <Link
                        href={item.href}
                        key={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                          CurrentPage === item.href
                            ? "text-primary"
                            : "text-muted-foreground",
                        )}
                      >
                        <item.icon className="h-6 w-6" />
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                ) : (
                  <nav className="flex flex-col items-center justify-center gap-4 p-4">
                    {Menu.map((item) => (
                      <Link href={item.href} key={item.href}>
                        <Tooltip>
                          <TooltipTrigger>
                            <item.icon className="h-6 w-6" />
                          </TooltipTrigger>
                          <TooltipContent>{item.label}</TooltipContent>
                        </Tooltip>
                      </Link>
                    ))}
                  </nav>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"> */}
        <ScrollArea className="max-h-screen pb-32 md:pb-8">
          {children}
        </ScrollArea>
        {/* </div> */}
      </div>
    </>
  );
}
