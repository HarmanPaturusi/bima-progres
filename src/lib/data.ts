import { RowDataPacket } from "mysql2";
import { db } from "./db";
import { GiatType, PaketType, ProgramType, SubGiatType } from "./type";

export async function getProgram() {
  const query = `SELECT * FROM program`;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data as ProgramType[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data program.");
  }
}
export async function getGiat() {
  const query = `SELECT * FROM giat`;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data as GiatType[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data kegiatan.");
  }
}

export async function getSubGiat() {
  const query = `SELECT * FROM subgiat`;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data as SubGiatType[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data sub kegiatan.");
  }
}

export interface AkunBelanjaType extends RowDataPacket {
  akun_bl_id: number;
  akun_id: number;
  subgiat_id: number;
  kode: string;
  nama: string;
}

export async function getAkunBelanja() {
  const query = `
  SELECT akun_bl.akun_bl_id, akun_bl.akun_id, akun_bl.subgiat_id, sub_rinci_akun.kode, sub_rinci_akun.nama
  FROM akun_bl
  JOIN sub_rinci_akun ON akun_bl.akun_id = sub_rinci_akun.id_sub_rinci
  `;
  try {
    const [data] = await db.execute<AkunBelanjaType[]>(query);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data akun belanja.");
  }
}

export interface SubsBelanjaType extends RowDataPacket {
  id_subs_bl: number;
  sub_bl_id: number;
  akun_bl_id: number;
  nama: string;
}

export async function getSubsBelanja() {
  const query = `
  SELECT subs_bl.id_subs_bl, subs_bl.sub_bl_id, subs_bl.akun_bl_id, sub_bl.nama
  FROM subs_bl
  JOIN sub_bl ON subs_bl.sub_bl_id = sub_bl.id_sub_bl
  `;
  try {
    const [data] = await db.execute<SubsBelanjaType[]>(query);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data sub belanja.");
  }
}

export async function getPaketBelanja(tahun?: number) {
  const query = `
  SELECT paket.id_paket, paket.nama, SUM(rincian.nilai) as pagu, paket.nilai as nilai, realK, bobotF,
  paket.no_kontrak, paket.pelaksana, paket.pengawas, paket.mulai_kontrak, 
  paket.akhir_kontrak, paket.tahun, paket.bl_id, paket.nip_teknis, tahap, barjas, unit_id 
  FROM paket
JOIN rincian
ON paket.id_paket = rincian.paket_id
${tahun ? "WHERE paket.tahun = " + tahun : ""}
GROUP BY paket.id_paket
ORDER BY paket.id_paket 
  `;
  try {
    const [data] = await db.execute(query);
    return data as PaketType[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data paket belanja.");
  }
}
