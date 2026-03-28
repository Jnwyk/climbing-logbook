-- AlterTable
ALTER TABLE "areas" ALTER COLUMN "minGrade" DROP NOT NULL,
ALTER COLUMN "maxGrade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ascents" ALTER COLUMN "personalOpinion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "crags" ALTER COLUMN "minGrade" DROP NOT NULL,
ALTER COLUMN "maxGrade" DROP NOT NULL;
