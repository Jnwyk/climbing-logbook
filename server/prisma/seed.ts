import prisma from "../prismaClient";
import * as bcrypt from "bcrypt";

async function main() {
  // ─── FORMATS ─────────────────────────────────────────────────────────────
  await prisma.format.createMany({
    data: [
      { format: "Sport" },
      { format: "Trad" },
      { format: "Boulder" },
      { format: "Top Rope" },
      { format: "Multipitch" },
    ],
    skipDuplicates: true,
  });

  const sportFormat = await prisma.format.findFirstOrThrow({
    where: { format: "Sport" },
  });
  const topRopeFormat = await prisma.format.findFirstOrThrow({
    where: { format: "Top Rope" },
  });

  // ─── GRADES ──────────────────────────────────────────────────────────────
  await prisma.grade.createMany({
    data: [
      { grade: "5a" },
      { grade: "5b" },
      { grade: "5c" },
      { grade: "6a" },
      { grade: "6a+" },
      { grade: "6b" },
      { grade: "6b+" },
      { grade: "6c" },
      { grade: "6c+" },
      { grade: "7a" },
      { grade: "7a+" },
      { grade: "7b" },
      { grade: "7b+" },
      { grade: "7c" },
      { grade: "7c+" },
      { grade: "8a" },
    ],
    skipDuplicates: true,
  });

  const grade6a = await prisma.grade.findFirstOrThrow({
    where: { grade: "6a" },
  });
  const grade6bp = await prisma.grade.findFirstOrThrow({
    where: { grade: "6b+" },
  });
  const grade6c = await prisma.grade.findFirstOrThrow({
    where: { grade: "6c" },
  });
  const grade6cp = await prisma.grade.findFirstOrThrow({
    where: { grade: "6c+" },
  });
  const grade7a = await prisma.grade.findFirstOrThrow({
    where: { grade: "7a" },
  });
  const grade7b = await prisma.grade.findFirstOrThrow({
    where: { grade: "7b" },
  });
  const grade7c = await prisma.grade.findFirstOrThrow({
    where: { grade: "7c" },
  });
  const grade8a = await prisma.grade.findFirstOrThrow({
    where: { grade: "8a" },
  });

  // ─── STYLES ──────────────────────────────────────────────────────────────
  await prisma.style.createMany({
    data: [
      { style: "Redpoint" },
      { style: "Onsight" },
      { style: "Flash" },
      { style: "Top Rope" },
      { style: "Project" },
    ],
    skipDuplicates: true,
  });

  const redpoint = await prisma.style.findFirstOrThrow({
    where: { style: "Redpoint" },
  });
  const onsight = await prisma.style.findFirstOrThrow({
    where: { style: "Onsight" },
  });
  const flash = await prisma.style.findFirstOrThrow({
    where: { style: "Flash" },
  });
  const topropeStyle = await prisma.style.findFirstOrThrow({
    where: { style: "Top Rope" },
  });

  // ─── MATERIALS ───────────────────────────────────────────────────────────
  await prisma.material.createMany({
    data: [
      { material: "Limestone" },
      { material: "Granite" },
      { material: "Sandstone" },
      { material: "Conglomerate" },
    ],
    skipDuplicates: true,
  });

  const limestone = await prisma.material.findFirstOrThrow({
    where: { material: "Limestone" },
  });
  const conglomerate = await prisma.material.findFirstOrThrow({
    where: { material: "Conglomerate" },
  });

  // ─── AREAS ───────────────────────────────────────────────────────────────
  await prisma.area.createMany({
    data: [
      { name: "Margalef", country: "Spain" },
      { name: "Porúbka", country: "Slovakia" },
      { name: "Frankenjura", country: "Germany" },
      { name: "Tatra Mountains", country: "Poland" },
      { name: "Jura Krakowsko-Czestochowska", country: "Poland" },
    ],
    skipDuplicates: true,
  });

  // ─── CRAGS ───────────────────────────────────────────────────────────────
  await prisma.crag.createMany({
    data: [
      {
        name: "Porubské skaly",
        areaName: "Porúbka",
        country: "Slovakia",
        materialId: limestone.id,
      },
      {
        name: "Can Dit Gros",
        areaName: "Margalef",
        country: "Spain",
        materialId: conglomerate.id,
      },
      {
        name: "Dolina Kobylańska",
        areaName: "Jura Krakowsko-Czestochowska",
        country: "Poland",
        materialId: limestone.id,
      },
      {
        name: "Krottenseer Turm",
        areaName: "Frankenjura",
        country: "Germany",
        materialId: limestone.id,
      },
    ],
    skipDuplicates: true,
  });

  // ─── ROUTES ──────────────────────────────────────────────────────────────
  const routeSzaraPlyta = await prisma.route.create({
    data: {
      name: "Szara Plyta",
      cragName: "Dolina Kobylańska",
      areaName: "Jura Krakowsko-Czestochowska",
      country: "Poland",
      gradeId: grade7a.id,
      defaultFormatId: sportFormat.id,
      length: 15,
      year: new Date("1994-01-01"),
      firstAscent: "Piotr Wozniak",
      boltNumber: 6,
      additionalInfo: "Classic crimpy face climb on perfect limestone.",
    },
  });

  const routeRafel = await prisma.route.create({
    data: {
      name: "Rafel",
      cragName: "Can Dit Gros",
      areaName: "Margalef",
      country: "Spain",
      gradeId: grade8a.id,
      defaultFormatId: sportFormat.id,
      length: 30,
      year: new Date("2003-01-01"),
      firstAscent: "Ramón Julián",
      boltNumber: 12,
      additionalInfo:
        "Powerful conglomerate pulling through massive tufa system.",
    },
  });

  const routeTriBodky = await prisma.route.create({
    data: {
      name: "Tri Bodky",
      cragName: "Porubské skaly",
      areaName: "Porúbka",
      country: "Slovakia",
      gradeId: grade7c.id,
      defaultFormatId: sportFormat.id,
      length: 25,
      year: new Date("1998-01-01"),
      firstAscent: "Unknown",
      boltNumber: 10,
      additionalInfo:
        "Technical limestone face climbing on compact rock. One of the harder sport routes in the Porubské skaly sector.",
    },
  });

  const routeSautanz = await prisma.route.create({
    data: {
      name: "Sautanz",
      cragName: "Krottenseer Turm",
      areaName: "Frankenjura",
      country: "Germany",
      gradeId: grade7a.id,
      defaultFormatId: sportFormat.id,
      length: 18,
      year: new Date("1988-01-01"),
      firstAscent: "Wolfgang Güllich",
      boltNumber: 7,
      additionalInfo: "Frankenjura classic with pockets and sidepulls.",
    },
  });

  const routeKominPoProstu = await prisma.route.create({
    data: {
      name: "Komin po Prostu",
      cragName: "Dolina Kobylańska",
      areaName: "Jura Krakowsko-Czestochowska",
      country: "Poland",
      gradeId: grade6a.id,
      defaultFormatId: sportFormat.id,
      length: 18,
      boltNumber: 7,
      firstAscent: "Unknown",
      additionalInfo:
        "Popular limestone sport route in Dolina Kobylańska near Kraków.",
    },
  });

  // ─── USERS ───────────────────────────────────────────────────────────────
  const passwordHash = await bcrypt.hash("Password123!", 10);

  const adminUser = await prisma.user.create({
    data: {
      username: "admin",
      password: await bcrypt.hash("AdminPass123!", 10),
      email: "admin@climblog.app",
      role: "ADMIN",
    },
  });

  const alexUser = await prisma.user.create({
    data: {
      username: "alexsharma",
      password: passwordHash,
      email: "alex.sharma@example.com",
      role: "USER",
    },
  });

  const miaUser = await prisma.user.create({
    data: {
      username: "miakowalski",
      password: passwordHash,
      email: "mia.kowalski@example.com",
      role: "USER",
    },
  });

  const tomaszUser = await prisma.user.create({
    data: {
      username: "tomaszberg",
      password: passwordHash,
      email: "tomasz.berg@example.com",
      role: "USER",
    },
  });

  // ─── PROFILES ────────────────────────────────────────────────────────────
  await prisma.profile.createMany({
    data: [
      {
        userId: alexUser.id,
        sex: "MALE",
        age: 28,
        climbingStart: new Date("2018-03-01"),
        personalBest: "7b+",
      },
      {
        userId: miaUser.id,
        sex: "FEMALE",
        age: 25,
        climbingStart: new Date("2020-06-01"),
        personalBest: "6c",
      },
      {
        userId: tomaszUser.id,
        sex: "MALE",
        age: 34,
        climbingStart: new Date("2015-01-01"),
        personalBest: "8a",
      },
    ],
  });

  // ─── ASCENTS ─────────────────────────────────────────────────────────────
  await prisma.ascent.createMany({
    data: [
      {
        userId: alexUser.id,
        routeId: routeRafel.id,
        ascentDate: new Date("2024-04-15"),
        styleId: onsight.id,
        formatId: sportFormat.id,
        myGradeId: grade6c.id,
        personalOpinion: "Felt about right, good warm-up.",
        stars: 3,
        visibility: "PUBLIC",
      },
      {
        userId: alexUser.id,
        routeId: routeSautanz.id,
        ascentDate: new Date("2024-07-20"),
        styleId: redpoint.id,
        formatId: sportFormat.id,
        myGradeId: grade7a.id,
        personalOpinion: "Took me 6 sessions but worth every fall.",
        stars: 5,
        visibility: "PUBLIC",
      },
      {
        userId: alexUser.id,
        routeId: routeSzaraPlyta.id,
        ascentDate: new Date("2024-09-01"),
        styleId: redpoint.id,
        formatId: sportFormat.id,
        myGradeId: grade7b.id,
        personalOpinion: "Hard for the grade, super classic.",
        stars: 5,
        visibility: "PRIVATE",
      },
      {
        userId: miaUser.id,
        routeId: routeKominPoProstu.id,
        ascentDate: new Date("2024-05-10"),
        styleId: flash.id,
        formatId: sportFormat.id,
        myGradeId: grade6bp.id,
        personalOpinion: "Maybe slightly soft for 6b, stunning setting.",
        stars: 4,
        visibility: "PUBLIC",
      },
      {
        userId: miaUser.id,
        routeId: routeSzaraPlyta.id,
        ascentDate: new Date("2024-04-14"),
        styleId: topropeStyle.id,
        formatId: topRopeFormat.id,
        myGradeId: grade6cp.id,
        personalOpinion: "Felt like 6c+ to me on this day.",
        stars: 3,
        visibility: "PUBLIC",
      },
      {
        userId: tomaszUser.id,
        routeId: routeRafel.id,
        ascentDate: new Date("2024-10-05"),
        styleId: redpoint.id,
        formatId: sportFormat.id,
        myGradeId: grade8a.id,
        personalOpinion: "Project done after 3 trips. Tufas are incredible.",
        stars: 5,
        visibility: "PUBLIC",
      },
      {
        userId: tomaszUser.id,
        routeId: routeTriBodky.id,
        ascentDate: new Date("2023-08-18"),
        styleId: onsight.id,
        formatId: sportFormat.id,
        myGradeId: grade7c.id,
        personalOpinion: "One of the best multi-pitches in Europe.",
        stars: 5,
        visibility: "PUBLIC",
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
