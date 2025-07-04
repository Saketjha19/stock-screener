import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}
    interface User {
        id?: string
        name?: string
        email?: string
        image?: string
    }
    