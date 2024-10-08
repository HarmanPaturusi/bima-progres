import { TabsProgram } from "@/components/realisasi/tabs-program";
import { getProgram } from "@/lib/data";
import React from "react";

export default async function page() {
  const dataProgram = await getProgram();
  return (
    <div className="container p-4 md:p-8">
      <TabsProgram programs={dataProgram} />
    </div>
  );
}
