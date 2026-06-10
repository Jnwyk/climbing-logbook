/*
  Warnings:

  - A unique constraint covering the columns `[format]` on the table `formats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[grade]` on the table `grades` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[material]` on the table `materials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[style]` on the table `styles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "formats_format_key" ON "formats"("format");

-- CreateIndex
CREATE UNIQUE INDEX "grades_grade_key" ON "grades"("grade");

-- CreateIndex
CREATE UNIQUE INDEX "materials_material_key" ON "materials"("material");

-- CreateIndex
CREATE UNIQUE INDEX "styles_style_key" ON "styles"("style");
