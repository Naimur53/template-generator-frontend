const rootServerURL = (other: string) => `http://localhost:5001${other}`;
const reactGenURL = (name?: string) =>
  `http://localhost:5001/react/tem/${name || "demo"}`;
const nextGenURL = (name?: string) =>
  `http://localhost:5001/next/tem/${name || "demo"}`;
const reduxFeatureGenURL = (name?: string) =>
  `http://localhost:5001/react/redux/${name || "demo"}`;
const mongooseTemGenURL = (name?: string) =>
  `http://localhost:5001/mongoose/tem/${name || "demo"}`;

export const allUrls = {
  reactGenURL,
  reduxFeatureGenURL,
  nextGenURL,
  mongooseTemGenURL,
  rootServerURL,
};
