"use client";
import { CircleUser, Package2, Search, AlignJustify } from "lucide-react";
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
import { ScrollArea } from "./ui/scroll-area";
import { Menu } from "@/lib/menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export function TopNav() {
  return (
    <>
      <header className="hidden sticky top-0 md:flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="text-nowrap">Acme Inc</span>
        </Link>
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
    </>
  );
}

export function MobileNav() {
  return (
    <>
      <header className="sticky top-0 flex md:hidden flex-col h-32 items-center gap-4 bg-background px-4 md:px-6 z-50">
        <div className="flex w-full items-center justify-between pt-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="text-nowrap">Acme Inc</span>
          </Link>
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
        </div>
      </header>
    </>
  );
}

export function SideNav() {
  const CurrentPage = usePathname();
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex max-h-screen flex-col gap-2">
          <div className="flex-1">
            <ScrollArea className="max-h-screen">
              <nav className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 p-4">
                {Menu.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={cn(
                      "flex  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                      CurrentPage === item.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <item.icon className="h-6 w-6" />
                      </TooltipTrigger>
                      <TooltipContent>{item.label}</TooltipContent>
                    </Tooltip>
                    <div className="hidden lg:flex">{item.label}</div>
                  </Link>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}
