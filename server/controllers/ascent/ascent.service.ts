import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import {
  AscentVisibility,
  CreateAscentInterface,
} from "../../types/ascents.types";

class AscentService {
  public getAllAscents = async () => {
    return await prisma.ascent.findMany({
      select: {
        ascentDate: true,
        stars: true,
        route: {
          select: {
            name: true,
            cragName: true,
            areaName: true,
            country: true,
            grade: {
              select: { grade: true },
            },
          },
        },
        format: {
          select: { format: true },
        },
        style: {
          select: { style: true },
        },
        myGrade: {
          select: { grade: true },
        },
      },
    });
  };

  public createAscent = async (body: CreateAscentInterface) => {
    const ascentData: Prisma.AscentCreateInput = {
      stars: body.stars,
      visibility: body.visibility,
      personalOpinion: body.personalOpinion,
      user: {
        connect: {
          id: body.userId,
        },
      },
      route: {
        connect: {
          id: body.routeId,
        },
      },
      myGrade: {
        connect: {
          id: body.myGradeId,
        },
      },
      format: {
        connect: {
          id: body.formatId,
        },
      },
      style: {
        connect: {
          id: body.styleId,
        },
      },
    };
    return await prisma.ascent.create({ data: ascentData });
  };

  public updateAscent = async (
    params: { id: string },
    body: CreateAscentInterface,
  ) => {
    const ascentData: Prisma.AscentCreateInput = {
      stars: body.stars,
      visibility: body.visibility,
      personalOpinion: body.personalOpinion,
      user: {
        connect: {
          id: body.userId,
        },
      },
      route: {
        connect: {
          id: body.routeId,
        },
      },
      myGrade: {
        connect: {
          id: body.myGradeId,
        },
      },
      format: {
        connect: {
          id: body.formatId,
        },
      },
      style: {
        connect: {
          id: body.styleId,
        },
      },
    };
    return await prisma.ascent.update({
      data: ascentData,
      where: { id: params.id },
    });
  };

  public deleteAscent = async (params: { id: string }) => {
    return await prisma.ascent.delete({
      where: { id: params.id },
    });
  };

  public switchVisibilityAscent = async (
    params: { id: string },
    body: { visibility: AscentVisibility },
  ) => {
    return await prisma.ascent.update({
      data: {
        visibility: body.visibility,
      },
      where: {
        id: params.id,
      },
    });
  };
}

export default AscentService;
