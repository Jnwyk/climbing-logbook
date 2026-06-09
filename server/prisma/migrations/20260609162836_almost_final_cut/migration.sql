/*
  Warnings:

  - You are about to drop the column `rockMaterial` on the `areas` table. All the data in the column will be lost.
  - You are about to drop the column `ascentStyle` on the `ascents` table. All the data in the column will be lost.
  - You are about to drop the column `climbingStyle` on the `routes` table. All the data in the column will be lost.
  - You are about to drop the column `grade` on the `routes` table. All the data in the column will be lost.
  - Added the required column `formatId` to the `ascents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `myGradeId` to the `ascents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `ascents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `styleId` to the `ascents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialId` to the `crags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultFormatId` to the `routes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeId` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PRIVATE', 'PUBLIC');

-- AlterTable
ALTER TABLE "areas" DROP COLUMN "rockMaterial";

-- AlterTable
ALTER TABLE "ascents" DROP COLUMN "ascentStyle",
ADD COLUMN     "formatId" TEXT NOT NULL,
ADD COLUMN     "myGradeId" TEXT NOT NULL,
ADD COLUMN     "stars" INTEGER NOT NULL,
ADD COLUMN     "styleId" TEXT NOT NULL,
ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'PUBLIC';

-- AlterTable
ALTER TABLE "crags" ADD COLUMN     "materialId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "routes" DROP COLUMN "climbingStyle",
DROP COLUMN "grade",
ADD COLUMN     "defaultFormatId" TEXT NOT NULL,
ADD COLUMN     "gradeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "route_history" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "changesJson" JSONB NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "route_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ascent_history" (
    "id" TEXT NOT NULL,
    "ascentId" TEXT NOT NULL,
    "changesJson" JSONB NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ascent_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formats" (
    "id" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grades" (
    "id" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "styles" (
    "id" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials" (
    "id" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_defaultFormatId_fkey" FOREIGN KEY ("defaultFormatId") REFERENCES "formats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_history" ADD CONSTRAINT "route_history_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascents" ADD CONSTRAINT "ascents_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascents" ADD CONSTRAINT "ascents_formatId_fkey" FOREIGN KEY ("formatId") REFERENCES "formats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascents" ADD CONSTRAINT "ascents_myGradeId_fkey" FOREIGN KEY ("myGradeId") REFERENCES "grades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascent_history" ADD CONSTRAINT "ascent_history_ascentId_fkey" FOREIGN KEY ("ascentId") REFERENCES "ascents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crags" ADD CONSTRAINT "crags_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
