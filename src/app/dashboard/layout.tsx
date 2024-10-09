import { BottomNav } from "@/components/bottom-nav";
import { MobileNav, SideNav, TopNav } from "@/components/top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-col">
        <TopNav />
        <MobileNav />
        <div className="grid w-full min-h-screen grid-cols-1 md:grid-cols-[70px_1fr] lg:grid-cols-[280px_1fr]">
          <SideNav />
          {children}
        </div>
        <BottomNav />
      </div>
    </>
  );
}
