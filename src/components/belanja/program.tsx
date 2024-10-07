import {
  getProgram,
  getGiat,
  getSubGiat,
  getAkunBelanja,
  getSubsBelanja,
  getPaketBelanja,
} from "@/lib/data";
import { Separator } from "../ui/separator";
import { SubGiatBelanja } from "./subgiat";

export async function ProgramBelanja() {
  const dataProgram = await getProgram();
  const dataGiat = await getGiat();
  const dataSubGiat = await getSubGiat();
  const dataAkun = await getAkunBelanja();
  const dataSubs = await getSubsBelanja();
  const dataPaket = await getPaketBelanja();
  return (
    <div className="container p-8">
      {dataProgram.map((program) => (
        <div key={program.id_program}>
          <div className="flex flex-col md:flex-row text-sm md:gap-2">
            <div>{program.kode.replace("X.XX", "1.03")}</div>
            <div className="mb-3">
              PROGRAM <span className="hidden md:inline">{program.nama}</span>
              <span className="md:hidden">{program.alias}</span>
            </div>
          </div>
          {dataGiat
            .filter((giats) => giats.program_id === program.id_program)
            .map((giat) => (
              <div key={giat.id_giat}>
                <div className="flex flex-col md:flex-row md:gap-2 text-sm">
                  <div>{giat.kode.replace("X.XX", "1.03")}</div>
                  <div className="mb-3">{giat.nama}</div>
                </div>
                {dataSubGiat
                  .filter((subgiats) => subgiats.giat_id === giat.id_giat)
                  .map((subgiat) => (
                    <SubGiatBelanja
                      key={subgiat.id_subgiat}
                      data={subgiat}
                      akuns={dataAkun}
                      subs={dataSubs}
                      pakets={dataPaket}
                    />
                  ))}
              </div>
            ))}
          <Separator className="my-3" />
        </div>
      ))}
    </div>
  );
}
