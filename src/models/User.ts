export interface User {
  id: string;
  username: string;
  role: "operator" | "driver";
  createdAt: Date;
}
