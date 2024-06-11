import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import pool from "@/db";

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Check if the email and password are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
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
          // Compare the provided password with the hashed password stored in the database
          const isPasswordValid = await compare(
            credentials.password,
            user.password,
          );
          if (!isPasswordValid) {
            // If the password is invalid, return null
            return null;
          }
          // If the password is valid, return the user object
          console.log({isPasswordValid})
          return {
            id: user.id,
            email: user.email,
          };
        } catch (error) {
          throw new Error("An error occurred during sign-in");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
