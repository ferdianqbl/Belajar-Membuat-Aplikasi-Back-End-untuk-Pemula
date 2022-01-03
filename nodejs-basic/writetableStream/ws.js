const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");
writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.write("Ini merupakan teks baris ketiga!\n");
writableStream.write("Ini merupakan teks baris keempat!\n");
writableStream.write("Ini merupakan teks baris kelima!\n");
writableStream.end("Akhir dari writable stream!");
