"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { getBobot } from "@/lib/utils";
import {
  ShoppingCart,
  Wallet,
  Circle,
  CircleAlert,
  CircleArrowUp,
  ArrowUp
} from "lucide-react";
import { RowDataPacket } from "mysql2";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts";

export function RealisasiFisikDinas({ data }: { data: { bobotF: number, bobotK: number } }) {
  return (
    <Card className="h-[180px]">
      <CardHeader className="pb-2">
        <CardTitle>Realisasi Belanja</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr,20px,1fr] gap-4 py-4">
        <div>
          <CardDescription>Fisik</CardDescription>
          <div className="text-4xl font-semibold">
            {data.bobotF}<span className="text-sm">%</span>
          </div>
          {/* <div className="text-xs text-muted-foreground flex flex-row gap-3 mt-3">
            +25%{" "}
            <span>
              <ArrowUp className="h-4 w-4 text-primary" />
            </span>
          </div> */}
          <Progress
            value={data.bobotF}
            aria-label="25% increase"
            className="my-3 h-1"
          />
        </div>
        <div className="flex items-center justify-center">
          <Separator orientation="vertical" />
        </div>
        <div>
          <CardDescription>Keuangan</CardDescription>
          <div className="text-4xl font-semibold">
            {data.bobotK}<span className="text-sm">%</span>
          </div>
          {/* <div className="text-xs text-muted-foreground flex flex-row gap-3 mt-3">
            +25%{" "}
            <span>
              <ArrowUp className="h-4 w-4 text-primary" />
            </span>
          </div> */}
          <Progress
            value={data.bobotK}
            aria-label="25% increase"
            className="my-3 h-1"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function RealisasiKeuDinas() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Realisasi Keuangan</CardDescription>
        <CardTitle className="text-4xl">
          32,9<span className="text-sm">%</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}
export function RealisasiPadDinas({ data }: { data: { items: RowDataPacket[], total: number } }) {

  return (
    <Card className="h-[180px]">
      <CardHeader className="pb-2">
        <CardTitle>Realisasi PAD</CardTitle>
      </CardHeader>
      <CardContent className="grid  grid-cols-[1fr,10px,1.5fr] gap-4 py-4">
        <div>
          <CardDescription>Total</CardDescription>
          <div className="text-4xl font-semibold">
            {data.total}<span className="text-sm">%</span>
          </div>
          {/* <div className="text-xs text-muted-foreground flex flex-row gap-3 mt-3">
            +25%{" "}
            <span>
              <ArrowUp className="h-4 w-4 text-primary" />
            </span>
          </div> */}
          <Progress
            value={data.total}
            aria-label="25% increase"
            className="my-3 h-1"
          />
        </div>
        <div className="flex items-center justify-center">
          <Separator orientation="vertical" />
        </div>
        <div className="grid items-center">
          <div>
            {data.items.map((item, index) =>
              <>
                <div className="flex justify-between items-baseline" key={index}>
                  <div className="text-sm text-muted-foreground">{item.alias}</div>
                  <div className="text-md font-semibold">
                    {getBobot(item.target, item.realisasi)}<span className="text-sm text-muted-foreground">%</span>
                  </div>
                </div>
                {/* <Progress
                value={getBobot(item.target, item.realisasi)}
                aria-label="25% increase"
                className="mb-2 h-1"
              /> */}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RealisasiBelanja() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <div>Realisasi Belanja</div>
          <ShoppingCart className="h-6 w-6" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-col items-center">
          <CardDescription>Fisik</CardDescription>
          <div className="text-4xl font-bold">
            56.7
            <span className="text-sm font-normal text-muted-foreground">%</span>
          </div>
          {/* <Progress value={56} color="bg-chart-1" className="mb-4 h-1" /> */}
        </div>
        <div className="flex flex-col items-center">
          <CardDescription>Keuangan</CardDescription>
          <div className="text-4xl font-bold">
            56.7
            <span className="text-sm font-normal text-muted-foreground">%</span>
          </div>
          {/* <Progress value={56} color="bg-chart-2" className="h-1" /> */}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row border-t px-6 pt-3 pb-6">
        <div className="flex w-full items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Pagu</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              562
              <span className="text-sm font-normal text-muted-foreground">
                kcal
              </span>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Fisik</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              73
              <span className="text-sm font-normal text-muted-foreground">
                min
              </span>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Keuangan</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              14
              <span className="text-sm font-normal text-muted-foreground">
                hr
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function RealisasiPendapatan({ data }: { data: RowDataPacket[] }) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <div>Realisasi Belanja</div>
          <ShoppingCart className="h-6 w-6" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 px-6 py-0  h-[220px]">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Total</div>
              <div className="flex items-baseline gap-1 text-4xl font-bold tabular-nums leading-none">
                56.2
                <span className="text-sm font-normal text-muted-foreground">
                  %
                </span>
              </div>
            </div>
            {/* <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="flex items-baseline gap-1">
                <div className="bg-chart-2 w-3 h-3" />
                <div className="text-sm text-muted-foreground">Keuangan</div>
              </div>
              <div className="flex items-baseline gap-1 text-4xl font-bold tabular-nums leading-none">
                73
                <span className="text-sm font-normal text-muted-foreground">
                  %
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <ChartContainer
          config={{
            pal: {
              label: "Move",
              color: "hsl(var(--chart-1))",
            },
            pbg: {
              label: "Stand",
              color: "hsl(var(--chart-2))",
            },
            lab: {
              label: "Exercise",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="mx-auto aspect-square w-full max-w-[80%]"
        >
          <BarChart
            accessibilityLayer
            data={[
              {
                activity: "PAL",
                value: 20,
                label: "8%",
                fill: "var(--color-pal)",
              },
              {
                activity: "PBG",
                value: 100,
                label: "100%",
                fill: "var(--color-pbg)",
              },
              {
                activity: "LAB",
                value: 60,
                label: "60%",
                fill: "var(--color-lab)",
              },
            ]}
            barSize={24}
            margin={{
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis type="number" dataKey="value" hide />
            <XAxis
              dataKey="activity"
              type="category"
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              className="capitalize"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" radius={3}>
              <LabelList
                position="top"
                dataKey="label"
                fill="black"
                offset={8}
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-row border-t px-6 pt-3 pb-6">
        <div className="flex w-full items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Pagu</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              562
              <span className="text-sm font-normal text-muted-foreground">
                kcal
              </span>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Fisik</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              73
              <span className="text-sm font-normal text-muted-foreground">
                min
              </span>
            </div>
          </div>
          <Separator orientation="vertical" className="mx-2 h-10 w-px" />
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-xs text-muted-foreground">Keuangan</div>
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              14
              <span className="text-sm font-normal text-muted-foreground">
                hr
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
