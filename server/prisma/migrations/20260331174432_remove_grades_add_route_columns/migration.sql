/*
  Warnings:

  - You are about to drop the column `maxGrade` on the `areas` table. All the data in the column will be lost.
  - You are about to drop the column `minGrade` on the `areas` table. All the data in the column will be lost.
  - You are about to drop the column `maxGrade` on the `crags` table. All the data in the column will be lost.
  - You are about to drop the column `minGrade` on the `crags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "areas" DROP COLUMN "maxGrade",
DROP COLUMN "minGrade",
ALTER COLUMN "rockMaterial" DROP NOT NULL;

-- AlterTable
ALTER TABLE "crags" DROP COLUMN "maxGrade",
DROP COLUMN "minGrade";

-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "additionalInfo" TEXT,
ADD COLUMN     "boltNumber" INTEGER,
ADD COLUMN     "firstAscent" TEXT,
ADD COLUMN     "length" INTEGER,
ADD COLUMN     "year" TIMESTAMP(3);
