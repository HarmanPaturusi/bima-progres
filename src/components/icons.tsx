import { cn } from "@/lib/utils";
import { CircleCheck, CircleEllipsis, CircleHelp, CirclePause, LucideIcon, LucideProps, Timer } from "lucide-react";
import { ReactSVG, SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';
import React from "react";

const tahapicon = [
    <CircleHelp className="w-4 h-4" />,
    <CirclePause className="w-4 h-4" />,
    <CircleEllipsis className="w-4 h-4" />,
    <Timer className="w-4 h-4" />,
    <CircleCheck className="w-4 h-4" />,
]

export function IconFase({ id }: { id: number }) {
    return tahapicon[id]
}
