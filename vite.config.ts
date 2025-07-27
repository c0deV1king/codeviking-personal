export default {
  preview: {
    host: true,
    port: process.env.PORT || 4321,
    allowedHosts: ["codeviking.io", ".railway.app", ".up.railway.app"],
  },
};
