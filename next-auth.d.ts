// next-auth.d.ts

import { Session, JWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Add the `id` field
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string; // Add the `id` field
  }
}
