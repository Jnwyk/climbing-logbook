import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";

class RouteService {
  public getAllRoutes = async () => {
    return await prisma.route.findMany({
      select: {
        name: true,
        cragName: true,
        areaName: true,
        country: true,
        grade: true,
      },
    });
  };

  public createRoute = async (body: any) => {
    const crag: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: body.cragName,
      areaName: body.areaName,
      country: body.country,
    };

    const routeData: Prisma.RouteCreateInput = {
      name: body.name,
      grade: body.grade,
      climbingStyle: body.climbingStyle,
      length: body.length,
      year: body.year,
      firstAscent: body.firstAscent,
      boltNumber: body.boltNumber,
      additionalInfo: body.additionalInfo,
      crag: {
        connect: {
          name_areaName_country: crag,
        },
      },
    };

    return await prisma.route.create({ data: routeData });
  };

  public updateRoute = async (params: { id: string }, body: any) => {
    const cragId: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: body.cragName,
      areaName: body.areaName,
      country: body.country,
    };
    console.log(body);
    const routeData: Prisma.RouteUpdateInput = {
      name: body.name,
      grade: body.grade,
      climbingStyle: body.climbingStyle,
      length: body.length,
      year: body.year,
      firstAscent: body.firstAscent,
      boltNumber: body.boltNumber,
      additionalInfo: body.additionalInfo,
      crag: {
        connect: {
          name_areaName_country: cragId,
        },
      },
    };
    return await prisma.route.update({
      data: routeData,
      where: { id: params.id },
    });
  };

  public deleteRoute = async (params: { id: string }) => {
    return await prisma.route.delete({
      where: { id: params.id },
    });
  };
}

export default RouteService;
