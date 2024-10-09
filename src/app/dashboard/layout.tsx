import { BottomNav } from "@/components/bottom-nav";
import { MobileNav, SideNav, TopNav } from "@/components/top-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-col pb-32">
        <TopNav />
        <MobileNav />
        <div className="grid w-full min-h-full grid-cols-1 md:grid-cols-[70px_1fr] lg:grid-cols-[200px_1fr]">
          <SideNav />
          <ScrollArea className="h-svh pb-52 md:pb-24">{children}</ScrollArea>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
