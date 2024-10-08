import { Charts } from "@/components/block/charts";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function page() {
  return (
    <div className="container h-screen w-full p-8">
      <ScrollArea className="h-full w-full">
        <Charts />;
      </ScrollArea>
    </div>
  );
}
