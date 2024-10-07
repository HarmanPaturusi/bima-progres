"use client";
import { Menu } from "@/lib/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const CurrentPage = usePathname();
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-16 items-center gap-4 border-t bg-background md:hidden py-2">
        <div className="w-full flex justify-center items-center gap-3">
          {Menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-xs flex flex-col items-center justify-center",
                CurrentPage === item.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              <item.icon className="h-6 w-6" />
              {item.label.slice(0, 9)}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
