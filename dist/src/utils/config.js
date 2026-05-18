"use strict";
// Configuration utility for environment variables
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.PORT || 4000,
    dbUrl: process.env.DATABASE_URL || "postgres://localhost:5432/spdcsms",
    logLevel: process.env.LOG_LEVEL || "info",
};
