const rootServerURL = (other: string) =>
  `https://ts-server-creator.vercel.app${other}`;
const reactGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/react/tem/${name || "demo"}`;
const nextGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/next/tem/${name || "demo"}`;
const reduxFeatureGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/react/redux/${name || "demo"}`;
const mongooseTemGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/mongoose/tem/${name || "demo"}`;
const mongooseModulesGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/mongoose/${name || "demo"}`;
const postgresTemGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/prisma/tem/${name || "demo"}`;
const postgresModulesGenURL = (name?: string) =>
  `https://ts-server-creator.vercel.app/prisma/${name || "demo"}`;

export const allUrls = {
  reactGenURL,
  reduxFeatureGenURL,
  nextGenURL,
  mongooseTemGenURL,
  rootServerURL,
  postgresTemGenURL,
  postgresModulesGenURL,
  mongooseModulesGenURL,
};
