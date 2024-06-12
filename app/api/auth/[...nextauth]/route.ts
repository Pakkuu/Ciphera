import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import pool from "@/db";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log(credentials)
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }

        try {
          // Query the database to find the user with the provided email
          const query = "SELECT * FROM users WHERE email = $1";
          const values = [credentials.email];
          const result = await pool.query(query, values);

          if (result.rows.length === 0) {
            return null;
          }

          const user = result.rows[0];

          const isPasswordValid = await compare(
            credentials.password,
            user.password,
          );

          console.log({ isPasswordValid });

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
            };
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
