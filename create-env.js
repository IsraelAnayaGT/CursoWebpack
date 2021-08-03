const fs = require("fs");

//process.env.API se a signa en netlify

fs.writeFileSync('./.env', ` API=${process.env.API}\n`);

