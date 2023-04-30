require("dotenv").config();
console.log(`The server will run on port ${process.env.SERVER_PORT}`);

console.log(
  `I'am "${process.env.DB_NAME}", wilder in "${process.env.DB_CITY}"and I love "${process.env.DB_LANGUAGE}"`
);
