import z from "zod";

export const ProgramSchema = z.object({
  id_program: z.number(),
  kode: z.string().length(7),
  nama: z.string().min(1).max(100),
  alias: z.string().min(1).max(50).optional(),
  unit_id: z.number(),
  nip_kpa: z.string().length(18),
});

export type ProgramType = z.infer<typeof ProgramSchema>;
export type AddProgramType = Omit<ProgramType, "nip_kpa" | "alias">;

export const GiatSchema = z.object({
  id_giat: z.number(),
  kode: z.string().length(12),
  nama: z.string().min(1).max(150),
  program_id: z.number(),
});

export type GiatType = z.infer<typeof GiatSchema>;
export type AddGiatType = Omit<GiatType, "id_giat">;

export const SubKegiatanSchema = z.object({
  id_subgiat: z.number(),
  kode: z.string().length(17),
  nama: z.string().min(1).max(300),
  giat_id: z.number(),
});
export type SubGiatType = z.infer<typeof SubKegiatanSchema>;
export type AddSubGiatType = Omit<SubGiatType, "id_subgiat">;

export const PaketSchema = z.object({
  id_paket: z.number(),
  nama: z.string().min(1).max(200),
  pagu: z.number(),
  nilai: z.number(),
  realK: z.number(),
  bobotF: z.number(),
  no_kontrak: z.string().min(1).max(50),
  pelaksana: z.string().min(1).max(50),
  pengawas: z.string().min(1).max(50),
  mulai_kontrak: z.date().optional(),
  akhir_kontrak: z.date().optional(),
  tahun: z.number(),
  bl_id: z.number(),
  nip_teknis: z.string().length(18),
  tahap: z.enum(["Persiapan", "Seleksi", "Berjalan", "Selesai"]),
  barjas: z.enum([
    "Konstruksi",
    "Barang",
    "Konsultansi",
    "Lainnya",
    "Swakelola",
    "Gaji",
    "Honorarium",
    "Umum",
  ]),
  unit_id: z.number(),
  updateAt: z.date().optional(),
});
export type PaketType = z.infer<typeof PaketSchema>;
export type AddPaketType = Omit<
  PaketType,
  | "id_paket"
  | "pagu"
  | "nilai"
  | "realK"
  | "bobotF"
  | "no_kontrak"
  | "pelaksana"
  | "pengawas"
  | "mulai_kontrak"
  | "akhir_kontrak"
  | "updateAt"
  | "tahap"
  | "barjas"
  | "nip_teknis"
>;
