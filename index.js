const app = require("./app");

// Connecting to DB
require("./src/database/mongoose").dbConnect();

// Creating server
app.listen(process.env.PORT, () =>
  console.log(`Listening at http://localhost:${process.env.PORT}`)
);
