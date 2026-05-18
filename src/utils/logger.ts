// Simple logger utility

export const logInfo = (message: string) => {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
};

export const logError = (message: string, error?: any) => {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || "");
};
