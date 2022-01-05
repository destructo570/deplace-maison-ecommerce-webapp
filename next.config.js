module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["imgur.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
