let ejs = require("ejs");
let fs = require("fs");
let path = require("path");
const config = {
  serviceDiscoveryType: ["eureka", "consul"],
  authenticationType: ["jwt", "session", "uaa", "oauth2"],
  prodDatabaseType: ["mysql", "mariadb", "postgresql"],
  cacheProvider: ["hazelcast", "ehcache", "infinispan", "memcached", "no"], //memcached

  searchEngine: "elasticsearch", //optional, at the moment not covered
  messageBroker: "useKakfa: = true" //optional, at the moment not covered
  //Open API?
};

const filename = "templates/microservice-demo.jdl.ejs";
try {
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
                fs.mkdirSync(
                  path.join(
                    __dirname,
                    `/../samples/${sdType}-${authType}-${proddbType}-${cacheType}`
                  ),
                  { recursive: true },
                  err => {
                    if (err) throw err;
                  }
                );
                fs.writeFile(
                  path.join(
                    __dirname,
                    `/../samples/${sdType}-${authType}-${proddbType}-${cacheType}/microservice-demo.jdl`
                  ),
                  str,
                  function(error, data) {
                    if (error) throw err;
                  }
                );
              }
            }
          );
        });
      });
    });
  });
  console.log("Samples generated succesfully.");
} catch (e) {
  console.error(e);
}
