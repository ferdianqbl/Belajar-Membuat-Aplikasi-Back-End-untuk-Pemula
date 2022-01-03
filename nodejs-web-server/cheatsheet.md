# <b style="color: red;">SERVER</b>

### Langkah menangani request

- cek method (req.method)
- cek url atau alamat yang dituju (routing request)

```javascript
const http = require("http");
```

> Method listen() dapat menerima 4 parameter, berikut detailnya:

- port (number) : jalur yang digunakan untuk mengakses HTTP server.
- hostname (string) : nama domain yang digunakan oleh HTTP server.
- backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
- listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

> Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port saja, atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda. Namun lazimnya, ketika memanggil method listen() kita memberikan nilai port, hostname, dan listeningListener.

## Response Status

` Yang pertama status line, atau bisa kita sebut response status; yang kedua response header; dan yang ketiga response body.`

> Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan. Status yang diberikan berupa kode (status code) dan pesan dari kode tersebut dalam bentuk teks (status message).

```javascript
const requestListener = (request, response) => {
  response.statusCode = 404;

  // 404 defaultnya adalah 'not found'
  response.statusMessage = "User is not found"; // sebaiknya tidak diubah seperti ini
};
```

- 100-199 : informational responses.
- <b>200 - 299 : successful responses.</b>
- 300-399 : redirect.
- <b>400-499 : client error. </b>
- <b>500-599 : server errors.</b>

> Response header adalah pesan yang ditampilkan. Header respons menampung informasi terkait respons yang diberikan oleh server. Informasi dapat berupa status respons, MIME types, tanggal, atau informasi lainnya yang mungkin dibutuhkan oleh client. Walaupun kita bisa memberikan informasi apa pun, namun tidak semua informasi cocok disimpan di header. Informasi pada header hanya sebagai metadata atau informasi yang menjelaskan tentang sebuah data lain (data utama).

```js
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
};
```

```js
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader("X-Powered-By", "NodeJS"); //properti X-Powered-By pada header untuk memberitahu client teknologi server apa yang kita gunakan.
};
```

> > Jika Anda menetapkan header dengan properti yang tidak standar (lihat apa saja standard properti pada header) atau Anda buat nama propertinya secara mandiri, maka sangat disarankan untuk menambahkan huruf X di awal nama propertinya.

Ketahuilah juga bahwa penulisan properti header dituliskan secara Proper Case atau setiap kata diawali dengan huruf kapital dan setiap katanya dipisahkan oleh tanda garis (-).

Content-Type berisi nilai MIME types (XML, HTML, JSON, gambar, atau sekadar teks biasa). Apa pun MIME types yang digunakan, web server wajib memberi tahu pada client.

- [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).
- [HTTP HEADER](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

> Response Body. Selain header, HTTP respons juga membawa body (Anda mengetahui ini pada materi pola komunikasi client dan server). Di dalam body inilah data utama (atau bisa kita sebut konten) seharusnya disimpan.

```js
const requestListener = (request, response) => {
  response.write("<html>");
  response.write("<body>");
  response.write("<h1>Hello, World!</h1>");
  response.write("</body>");
  response.write("</html>");
  response.end("<html><body><h1>Hello, World!</h1></body></html>");
};
```

> > Ketahuilah bahwa penting untuk menuliskan status dan header response sebelum Anda menuliskan data pada body. Karena tidak masuk akal bila Anda sudah menuliskan body, namun belum memberikan metadata terkait data apa yang hendak dikirim.
