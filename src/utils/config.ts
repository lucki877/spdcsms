// Configuration utility for environment variables

export const config = {
  port: process.env.PORT || 4000,
  dbUrl: process.env.DATABASE_URL || "postgres://localhost:5432/spdcsms",
  logLevel: process.env.LOG_LEVEL || "info",
};
