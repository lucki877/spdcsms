"use strict";
// Simple logger utility
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logInfo = void 0;
const logInfo = (message) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
};
exports.logInfo = logInfo;
const logError = (message, error) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || "");
};
exports.logError = logError;
