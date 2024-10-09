import { RowDataPacket } from "mysql2";
import { db } from "./db";
import { GiatType, PaketType, ProgramType, SubGiatType } from "./type";
import { getYear } from "date-fns";
import { getBobot } from "./utils";
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

export async function getPaketBelanja(barjas?: number, tahun?: number) {
  const filterTahun = tahun?.toString() || getYear(new Date()).toString();
  const query = `
  SELECT paket.id_paket, paket.nama as nama_paket, SUM(rincian.nilai) as pagu, paket.nilai as nilai, realK, bobotF,
  paket.no_kontrak, paket.pelaksana, paket.pengawas, paket.mulai_kontrak, 
  paket.akhir_kontrak, paket.tahun, paket.bl_id, paket.nip_teknis, tahap.nama as tahap, barjas_id,
  sub_bl.nama as sub_bl, barjas.keterangan as barjas, program.alias as program_alias
  FROM paket 
  JOIN rincian
  ON paket.id_paket = rincian.paket_id
  JOIN tahap
  ON paket.tahap_id = tahap.id_tahap
  JOIN barjas
  ON paket.barjas_id = barjas.id_barjas
  JOIN subs_bl
  ON paket.bl_id = subs_bl.id_subs_bl
  JOIN sub_bl
  ON subs_bl.sub_bl_id = sub_bl.id_sub_bl
  JOIN akun_bl
  ON akun_bl.akun_bl_id = subs_bl.akun_bl_id
  JOIN subgiat
  ON subgiat.id_subgiat = akun_bl.subgiat_id
  JOIN giat
  ON giat.id_giat = subgiat.giat_id
  JOIN program
  ON program.id_program = giat.program_id
  WHERE paket.tahun = ${filterTahun}
  ${barjas ? "AND barjas_id =" + barjas.toString() : ""} 
  GROUP BY paket.id_paket
  ORDER BY program.id_program, paket.id_paket 
  `;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data paket belanja.");
  }
}

export async function getRekapProgram() {
  const query = `
  SELECT unit.nama as unit_nama, unit.alias as unit_alias, program.id_program, program.kode, program.nama, program.alias, SUM(paket.nilai) as nilai, SUM(paket.pagu) as pagu, SUM(paket.realK) as realK, SUM(paket.realF) as realF
  FROM paket
  JOIN subs_bl
  ON subs_bl.id_subs_bl=paket.bl_id
  JOIN akun_bl
  ON akun_bl.akun_bl_id=subs_bl.akun_bl_id
  JOIN subgiat
  ON subgiat.id_subgiat=akun_bl.subgiat_id
  JOIN giat
  ON giat.id_giat=subgiat.giat_id
  JOIN program
  ON program.id_program=giat.program_id
  JOIN unit
  ON unit.id_unit=program.unit_id
  WHERE paket.tahun=${getYear(new Date())}
  GROUP BY id_program
  ORDER BY id_program
  `;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan rekap program.");
  }
}

export async function getRekapDinas() {
  const query = `
  SELECT SUM(pagu) as pagu, SUM(nilai) as nilai, SUM(realK) as realK, SUM(realF) as realF
  FROM paket
  `;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return {
      bobotF: getBobot(data[0].nilai, data[0].realF),
      bobotK: getBobot(data[0].nilai, data[0].realK),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan rekap realisasi dinas.");
  }
}

export async function getPendapatan() {
  const query1 = `
  SELECT *  FROM pendapatan
  `;
  const query2 = `
  SELECT SUM(target) as target, SUM(realisasi) as realisasi
  FROM pendapatan
  `;
  try {
    const [data1] = await db.execute<RowDataPacket[]>(query1);
    const [data2] = await db.execute<RowDataPacket[]>(query2);
    return {
      items: data1,
      total: getBobot(data2[0].target, data2[0].realisasi),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data pendapatan.");
  }
}

export async function getBarjas() {
  const query = `SELECT * FROM barjas`;
  try {
    const [data] = await db.execute<RowDataPacket[]>(query);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Gagal mendapatkan data barjas.");
  }
}
