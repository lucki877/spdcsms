"use strict";
// Simulated billing service for charging sessions
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBill = void 0;
const generateBill = (sessionId, userId, chargerId, kWh) => {
    const ratePerKWh = 0.25; // Example rate
    const amount = kWh * ratePerKWh;
    console.log(`Generated bill for session ${sessionId}: $${amount}`);
    return { sessionId, userId, chargerId, amount };
};
exports.generateBill = generateBill;
