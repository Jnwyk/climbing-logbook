-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sex" "Sex",
    "age" INTEGER,
    "climbingStart" TIMESTAMP(3),
    "personalBest" VARCHAR(5),
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cragName" TEXT NOT NULL,
    "areaName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "grade" VARCHAR(5) NOT NULL,
    "climbingStyle" VARCHAR(30) NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ascents" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "ascentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ascentStyle" TEXT NOT NULL,
    "personalOpinion" TEXT NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ascents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crags" (
    "name" TEXT NOT NULL,
    "areaName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "minGrade" VARCHAR(5) NOT NULL,
    "maxGrade" VARCHAR(5) NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "crags_pkey" PRIMARY KEY ("name","areaName","country")
);

-- CreateTable
CREATE TABLE "areas" (
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "rockMaterial" VARCHAR(30) NOT NULL,
    "minGrade" VARCHAR(5) NOT NULL,
    "maxGrade" VARCHAR(5) NOT NULL,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("name","country")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_cragName_areaName_country_fkey" FOREIGN KEY ("cragName", "areaName", "country") REFERENCES "crags"("name", "areaName", "country") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascents" ADD CONSTRAINT "ascents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ascents" ADD CONSTRAINT "ascents_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crags" ADD CONSTRAINT "crags_areaName_country_fkey" FOREIGN KEY ("areaName", "country") REFERENCES "areas"("name", "country") ON DELETE RESTRICT ON UPDATE CASCADE;
