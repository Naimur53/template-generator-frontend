const reactGenURL = (name?: string) =>
  `http://localhost:5001/react/tem/${name || "demo"}`;

export const allUrls = {
  reactGenURL,
};
