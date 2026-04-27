import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";

class AreaService {
  public getAllAreas = async () => {
    return await prisma.area.findMany();
  };

  public createArea = async (body: any) => {
    const areaData: Prisma.AreaCreateInput = {
      name: body.name,
      country: body.country,
      rockMaterial: body.rockMaterial,
    };
    return await prisma.area.create({ data: areaData });
  };

  public updateArea = async (
    params: { area: string; country: string },
    body: any,
  ) => {
    const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: params.area,
      country: params.country,
    };
    const areaData: Prisma.AreaCreateInput = {
      name: body.name,
      country: body.country,
      rockMaterial: body.rockMaterial,
    };
    return await prisma.area.update({
      data: areaData,
      where: { name_country: areaId },
    });
  };

  public deleteArea = async (params: { area: string; country: string }) => {
    const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: params.area,
      country: params.country,
    };
    return await prisma.area.delete({
      where: { name_country: areaId },
    });
  };
}

export default AreaService;
