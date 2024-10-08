"use client";

import { useSearchParams } from "next/navigation";
import { Dashboard1 } from "./dashboard-1";
import { Dashboard2 } from "./dashboard-2";
import { Dashboard3 } from "./dashboard-3";
import { Dashboard4 } from "./dashboard-4";
import { Dashboard5 } from "./dashboard-5";
import { Dashboard6 } from "./dashboard-6";
import { Dashboard7 } from "./dashboard-7";

export function Dashboard() {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  {
    if (search === "1") {
      return <Dashboard1 />;
    }
    if (search === "2") {
      return <Dashboard2 />;
    }
    if (search === "3") {
      return <Dashboard3 />;
    }
    if (search === "4") {
      return <Dashboard4 />;
    }
    if (search === "5") {
      return <Dashboard5 />;
    }
    if (search === "6") {
      return <Dashboard6 />;
    }
    if (search === "7") {
      return <Dashboard7 />;
    }
  }
}
