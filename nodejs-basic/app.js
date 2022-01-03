// console.log(Object.getOwnPropertyNames(global));
// console.log(process.env);
// console.log(process.env.PWD);
// console.log(process.env.USER);

// => SET NODE_ENV=production && node app.js (in console)
const server = new Server({
  host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
});

console.log(server);

// const cpuInformation = process.memoryUsage();

// console.log(cpuInformation);
