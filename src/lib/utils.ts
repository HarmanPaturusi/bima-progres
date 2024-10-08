import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBobot(
  pembagi: number,
  pembilang: number,
  presisi?: number | null
): number {
  return pembagi > 0
    ? Number(((pembilang / pembagi) * 100).toFixed(presisi || 1))
    : 0;
}

export const TanggalSekarang = () => {
  const tanggal = new Date();
  const formatIndonesia = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(tanggal);

  return formatIndonesia;
};
