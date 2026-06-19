import prisma from "../../prismaClient";

class DictionaryService {
  public getStyles = () => {
    return prisma.style.findMany({ select: { id: true, style: true } });
  };

  public getFormats = () => {
    return prisma.format.findMany({ select: { id: true, format: true } });
  };

  public getGrades = () => {
    return prisma.grade.findMany({ select: { id: true, grade: true } });
  };
}

export default DictionaryService;
