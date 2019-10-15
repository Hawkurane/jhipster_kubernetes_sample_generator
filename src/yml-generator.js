const config = require("./res/config.json");
const chalk = require("chalk");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
try {
  config.prodDatabaseType.forEach(prodDbType => {
    config.cacheProvider.forEach(cacheType => {
      ejs.renderFile(
        "templates/azure-pipelines-jdl-app.yaml.ejs",
        { config: config, cacheType: cacheType, prodDbType: prodDbType },
        function(err, str) {
          if (err) throw new Error(err);
          fs.mkdirSync(
            path.join(__dirname, `../yamls/`),
            { recursive: true },
            err => {
              if (err) throw new Error(err);
            }
          );
          fs.writeFile(
            path.join(
              __dirname,
              `../yamls/azure-pipelines-jdl-app-${cacheType}-${prodDbType}.yaml`
            ),
            str,
            function(error, data) {
              console.log(
                `... azurepipelines-jdl-app-${cacheType}-${prodDbType}.yaml`
              );
              if (error) throw err;
            }
          );
        }
      );
    });
  });
  console.log(chalk.green("====> Yamls generated successfully."));
} catch (e) {
  console.error(chalk.red(e));
}
