"use strict";
// Simulated OCPP service for charger communication
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectCharger = exports.connectCharger = void 0;
const connectCharger = (chargerId) => {
    // Simulate OCPP handshake
    console.log(`Connecting charger ${chargerId} via OCPP...`);
    return { status: "connected", chargerId };
};
exports.connectCharger = connectCharger;
const disconnectCharger = (chargerId) => {
    console.log(`Disconnecting charger ${chargerId}...`);
    return { status: "disconnected", chargerId };
};
exports.disconnectCharger = disconnectCharger;
