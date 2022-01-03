const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return "<h1>Homepage</h1>";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, res) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, res) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, res) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },

  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, res) => {
      const { name = "stranger" } = req.params;
      const { lang } = req.query;

      if (lang) return `Hai, ${name}, lang = ${lang}`; // http://localhost:5000/hello/ferdi?lang=id

      return `Hello, ${name}`; // http://localhost:5000/hello/ferdi
    },
  },

  {
    method: "*",
    path: "/{any*}",
    handler: (req, res) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
