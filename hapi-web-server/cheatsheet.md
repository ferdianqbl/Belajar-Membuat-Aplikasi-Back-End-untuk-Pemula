# ROUTES.js

## Path Parameters

```js
const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];
```

- method: "\*" => berarti method selain yang sudah dideklarasikan <br>
- path: "/{any\*}" => berarti path selain yang sudah di deklarasikan

```js
{
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, res) => {
      const { name = "stranger" } = req.params;
      return `Hello, ${name}`;
    },
  },
```

> pada path, terdapat {name?}, parameter tersebut dapat digunakan untuk mengambil nilai dari url. Jika tidak ada tanda tanya(?), akan terjadi error jika setelah route hello tidak diberi nilai. Namun, jika menggunakan tanda tanya (?), apabila setelah route hello tidak diberi nilai, maka akan diberi nilai default (harus juga ditentukan nilai defaultnya)

## Query Parameters

> Selain path parameter, terdapat cara lain yang sering digunakan dalam mengirimkan data melalui URL, yakni dengan query parameter. Teknik ini umum digunakan pada permintaan yang membutuhkan kueri dari client, contohnya seperti pencarian dan filter data. Data yang dikirim melalui query memiliki format key=value. Contohnya:

```js
localhost:5000?name=harry&location=bali
```

> Anda bisa mendapatkan nilai dari query parameter melalui request.query.

```js
server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    const { name, location } = request.query;
    return `Hello, ${name} from ${location}`;
  },
});
```

## Body/Payload Request

> Ketika menggunakan Node.js, untuk mendapatkan data pada body request--meskipun datanya hanya sebatas teks--kita harus berurusan dengan Readable Stream. Di mana untuk mendapatkan data melalui stream tak semudah seperti kita menginisialisasikan sebuah nilai pada variabel. <br><br>
> Good News! Ketika menggunakan Hapi, Anda tidak lagi berurusan dengan stream untuk mendapatkan datanya. Di balik layar, Hapi secara default akan mengubah payload JSON menjadi objek JavaScript. Dengan begitu, Anda tak lagi berurusan dengan JSON.parse()! <br><br>
> Kapan pun client mengirimkan payload berupa JSON, payload tersebut dapat diakses pada route handler melalui properti request.payload. Contohnya seperti ini:

```JS
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});
```

> Pada contoh di atas, handler menerima payload melalui request.payload. Dalam kasus tersebut, client mengirimkan data login dengan struktur:

```JS
{ "username": "harrypotter", "password": "encryptedpassword" }
```

## Response Toolkit

> Parameter yang kedua yaitu h (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client. Objek ini serupa dengan objek response pada request handler ketika kita menggunakan Node.js native.

```JS
server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});
```

> Fungsi handler harus selalu mengembalikan sebuah nilai, bila Anda menggunakan h ketika menangani permintaan, maka kembalikanlah dengan nilai h.response(). Anda bisa lihat contoh kode di atas. <br><br>

> Parameter h tidak hanya berfungsi untuk menetapkan status kode respons. Melalui h, Anda juga bisa menetapkan header response, content type, content length, dan masih banyak lagi.

```Js
// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};

// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};
```
