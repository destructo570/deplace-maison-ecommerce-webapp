import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "591589190690-g33u6a00f5lrp938ntmpuqvsi2nsluhd.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
