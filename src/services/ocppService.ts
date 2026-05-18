// Simulated OCPP service for charger communication

export const connectCharger = (chargerId: string) => {
  // Simulate OCPP handshake
  console.log(`Connecting charger ${chargerId} via OCPP...`);
  return { status: "connected", chargerId };
};

export const disconnectCharger = (chargerId: string) => {
  console.log(`Disconnecting charger ${chargerId}...`);
  return { status: "disconnected", chargerId };
};
