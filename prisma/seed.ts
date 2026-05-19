import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Default admin user
  await prisma.user.upsert({
    where: { username: "admin" },   // now valid because username is unique
    update: {},
    create: {
      username: "admin",
      role: "ADMIN",
    },
  });

  // Sample operators
  await prisma.user.createMany({
    data: [
      { username: "operator1", role: "OPERATOR" },
      { username: "operator2", role: "OPERATOR" }
    ],
    skipDuplicates: true,
  });

  // Sample chargers
  await prisma.charger.createMany({
    data: [
      { location: "Lagos HQ", status: "available" },
      { location: "Abuja Center", status: "available" },
      { location: "Port Harcourt Station", status: "unavailable" }
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => console.log("✅ Seed data inserted successfully"))
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
