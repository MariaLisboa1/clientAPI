const setupApp = require("./src/app");

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(process.env.PORT, () =>
      console.log(`App is listening on port: ${process.env.PORT}`)
    );

    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map((sig) =>
      process.on(sig, () =>
        server.close((err) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }

          app.database.connection.close(function () {
            console.info("Database connection closed!");
            process.exit(0);
          });
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
