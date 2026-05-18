// Simulated billing service for charging sessions

interface BillingRecord {
  sessionId: string;
  userId: string;
  chargerId: string;
  amount: number;
}

export const generateBill = (sessionId: string, userId: string, chargerId: string, kWh: number): BillingRecord => {
  const ratePerKWh = 0.25; // Example rate
  const amount = kWh * ratePerKWh;

  console.log(`Generated bill for session ${sessionId}: $${amount}`);

  return { sessionId, userId, chargerId, amount };
};
