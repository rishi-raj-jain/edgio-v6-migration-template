// File: edgio-v6-migration-template/edgio.config.js

module.exports = {
  backends: {
    origin: {
      domainOrIp: "blog.inshorts.com",
      hostHeader: "blog.inshorts.com",
      disableCheckCert: true,
    },
  },
};
