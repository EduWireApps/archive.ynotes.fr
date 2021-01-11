export const state = () => ({
  mainUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ynotes.fr",
  subdomainUrl:
    process.env.NODE_ENV === "development"
      ? "http://support.localhost:3000"
      : "https://support.ynotes.fr"
});
