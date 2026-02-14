import { PrismaClient, Role, Sex } from "@prisma/client";
import prisma from "../prismaClient";

const ascentStyles = ["Onsight", "Flash", "Redpoint", "Project"];

const rand = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

async function main() {
  console.log("Seeding database...");

  // AREAS

  const areas = [
    {
      name: "Jura Krakowsko-Częstochowska",
      country: "Poland",
      rockMaterial: "Limestone",
      minGrade: "5a",
      maxGrade: "9a",
    },
    {
      name: "Arco",
      country: "Italy",
      rockMaterial: "Limestone",
      minGrade: "4c",
      maxGrade: "9a",
    },
    {
      name: "Siurana",
      country: "Spain",
      rockMaterial: "Limestone",
      minGrade: "5b",
      maxGrade: "9b",
    },
  ];

  for (const area of areas) {
    await prisma.area.upsert({
      where: {
        name_country: { name: area.name, country: area.country },
      },
      update: {},
      create: area,
    });
  }

  // CRAGS

  const crags = [
    {
      name: "Dupa Slonia",
      areaName: "Jura Krakowsko-Częstochowska",
      country: "Poland",
      minGrade: "5a",
      maxGrade: "8b",
    },
    {
      name: "Massone",
      areaName: "Arco",
      country: "Italy",
      minGrade: "5c",
      maxGrade: "9a",
    },
    {
      name: "El Pati",
      areaName: "Siurana",
      country: "Spain",
      minGrade: "6a",
      maxGrade: "9b",
    },
  ];

  for (const crag of crags) {
    await prisma.crag.upsert({
      where: {
        name_areaName_country: {
          name: crag.name,
          areaName: crag.areaName,
          country: crag.country,
        },
      },
      update: {},
      create: crag,
    });
  }

  // ROUTES

  const realisticGrades = [
    "6a",
    "6a+",
    "6b",
    "6b+",
    "6c",
    "6c+",
    "7a",
    "7a+",
    "7b",
    "7b+",
    "7c",
    "8a",
  ];

  const routeData = [];

  for (const crag of crags) {
    for (let i = 1; i <= 15; i++) {
      routeData.push({
        name: `${crag.name} Route ${i}`,
        cragName: crag.name,
        areaName: crag.areaName,
        country: crag.country,
        grade: rand(realisticGrades) || "",
        climbingStyle: "Lead",
      });
    }
  }

  await prisma.route.createMany({
    data: routeData,
    skipDuplicates: true,
  });

  // USERS

  const usersData = [
    // Poland
    {
      username: "jnwyk",
      email: "jan.nowak@example.pl",
      sex: Sex.MALE,
      best: "7a+",
    },
    {
      username: "jan_kowalski",
      email: "jan@example.pl",
      sex: Sex.MALE,
      best: "7b",
    },
    {
      username: "anna_nowak",
      email: "anna@example.pl",
      sex: Sex.FEMALE,
      best: "7a",
    },

    // Italy
    {
      username: "marco_bianchi",
      email: "marco@example.it",
      sex: Sex.MALE,
      best: "8a",
    },
    {
      username: "giulia_rossi",
      email: "giulia@example.it",
      sex: Sex.FEMALE,
      best: "7c",
    },

    // Spain
    {
      username: "carlos_m",
      email: "carlos@example.es",
      sex: Sex.MALE,
      best: "8b",
    },
    {
      username: "lucia_g",
      email: "lucia@example.es",
      sex: Sex.FEMALE,
      best: "7c+",
    },
  ];

  for (const u of usersData) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        username: u.username,
        email: u.email,
        password: "password",
        role: u.username === "jnwyk" ? Role.ADMIN : Role.USER,
        profile: {
          create: {
            sex: u.sex,
            age: 25 + Math.floor(Math.random() * 10),
            climbingStart: new Date(2012 + Math.floor(Math.random() * 8), 1, 1),
            personalBest: u.best,
          },
        },
      },
    });
  }

  // ASCENTS

  const allUsers = await prisma.user.findMany();
  const allRoutes = await prisma.route.findMany();

  for (const user of allUsers) {
    const ascentsCount = 10 + Math.floor(Math.random() * 15);

    for (let i = 0; i < ascentsCount; i++) {
      const route = rand(allRoutes);
      if (typeof route === "undefined") throw new Error("Incorrect data");

      await prisma.ascent.create({
        data: {
          userId: user.id,
          routeId: route.id,
          ascentStyle: rand(ascentStyles) || "",
          personalOpinion: "Great moves, solid rock, would climb again.",
          ascentDate: new Date(
            2023,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28),
          ),
        },
      });
    }
  }

  console.log("Seed data created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
