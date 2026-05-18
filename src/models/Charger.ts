export interface Charger {
  id: string;
  location: string;
  status: "available" | "occupied" | "offline";
  installedAt: Date;
}
