import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";

class CragService {
  public getAllCrags = async () => {
    return await prisma.crag.findMany();
  };

  public createCrag = async (body: any) => {
    const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: body.area,
      country: body.country,
    };
    const cragData: Prisma.CragCreateInput = {
      name: body.crag,
      area: {
        connect: { name_country: areaId },
      },
    };
    return await prisma.crag.create({ data: cragData });
  };

  public updateCrag = async (
    params: { crag: string; area: string; country: string },
    body: any,
  ) => {
    const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: params.area,
      country: params.country,
    };
    const cragId: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: params.crag,
      areaName: params.area,
      country: params.country,
    };
    const cragData: Prisma.CragCreateInput = {
      name: body.crag,
      area: {
        connect: {
          name_country: areaId,
        },
      },
    };
    return await prisma.crag.update({
      data: cragData,
      where: { name_areaName_country: cragId },
    });
  };

  public deleteCrag = async (params: {
    crag: string;
    area: string;
    country: string;
  }) => {
    const cragId: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: params.crag,
      areaName: params.area,
      country: params.country,
    };
    return await prisma.crag.delete({
      where: { name_areaName_country: cragId },
    });
  };
}

export default CragService;
