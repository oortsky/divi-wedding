/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY
  }
};

module.exports = nextConfig;
