const fs = require("fs");

const readableStream = fs.createReadStream("./article.txt", {
  // highWaterMark: 10,
  // highWaterMark: 5,
  highWaterMark: 20,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

/** jika highWaterMark: 20
 *  [Stream di Node.js
    ][
    Teknik stream meru][pakan salah satu kon][sep fundamental yang][ mendukung aplikasi ][Node.js bekerja. Tek][nik ini dapat menang][ani kasus baca tulis][ berkas, komunikasi ][jaringan, atau beban][ kerja apapun agar d][apat berjalan dengan][ lebih efisien.][null]Done
 */
