let ejs = require("ejs");
let fs = require("fs");
let path = require("path");
const config = {
  serviceDiscoveryType: ["eureka", "consul"],
  authenticationType: ["jwt", "session", "uaa", "oauth2"],
  prodDatabaseType: ["mysql", "mariadb", "postgresql"],
  cacheProvider: ["hazelcast", "ehcache", "infinispan", "memcached", "no"], //memcached

  searchEngine: "elasticsearch", //optional
  messageBroker: "useKakfa: = true" //optional
  //open API?
};

const filename = "templates/microservice-demo.jdl.ejs";
let cpt = 0;
config.serviceDiscoveryType.forEach(sdType => {
  config.authenticationType.forEach(authType => {
    config.prodDatabaseType.forEach(proddbType => {
      config.cacheProvider.forEach(cacheType => {
        ejs.renderFile(
          filename,
          {
            sdType: sdType,
            authType: authType,
            proddbType: proddbType,
            cacheType: cacheType
          },
          function(err, str) {
            if (err) console.log(err);
            else {
              fs.mkdir(
                path.join(__dirname, `/../samples/${cpt}`),
                { recursive: true },
                err => {
                  if (err) throw err;
                }
              );
              fs.writeFile(
                path.join(
                  __dirname,
                  "/..",
                  `/samples/${cpt}/microservice-demo.jdl`
                ),
                str,
                function(error, data) {
                  if (error) console.log(error);
                }
              );
            }
            cpt++;
          }
        );
      });
    });
  });
});
