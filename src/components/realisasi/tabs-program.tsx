"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramType } from "@/lib/type";
import {
  Building2,
  ChartBarStacked,
  ChartBarStackedIcon,
  Dam,
  Droplet,
  Droplets,
  FolderCog,
  House,
  LucideIcon,
  LucideProps,
  MapPin,
  MapPinned,
  TrafficCone,
  UtilityPole,
} from "lucide-react";

export function TabsProgram({ programs }: { programs: ProgramType[] }) {
  const programIcon = [
    <ChartBarStacked className="h-4 w-4" />,
    <Droplets className="h-4 w-4" />,
    <Droplet className="h-4 w-4" />,
    <Dam className="h-4 w-4" />,
    <House className="h-4 w-4" />,
    <Building2 className="h-4 w-4" />,
    <UtilityPole className="h-4 w-4" />,
    <TrafficCone className="h-4 w-4" />,
    <MapPinned className="h-4 w-4" />,
    <FolderCog className="h-4 w-4" />,
  ];
  return (
    <Tabs defaultValue={"all"} className="w-full">
      <TabsList className="bg-muted">
        <TabsTrigger value={"all"} className="w-24 rounded-full gap-2">
          {programIcon[0]}
          <div className="hidden md:block">All</div>
        </TabsTrigger>
      </TabsList>
      {programs.map((program, index) => (
        <TabsList key={program.id_program} className="bg-muted">
          <TabsTrigger
            value={program.id_program.toString()}
            className="w-24 rounded-full gap-2"
          >
            {programIcon[++index]}
            <div className="hidden md:block">{program.alias?.slice(0, 5)}</div>
          </TabsTrigger>
        </TabsList>
      ))}
      <TabsContent value="program"></TabsContent>
    </Tabs>
  );
}
