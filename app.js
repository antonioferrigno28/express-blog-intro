// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare le chiamate su Postman!
// Buon lavoro!

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    titolo: "Post 1",
    contenuto: "Questo è il contenuto del primo post.",
    immagine: "/images/image1.jpg",
    tags: ["generico", "esempio", "blog"],
  },
  {
    titolo: "Post 2",
    contenuto: "Questo è il contenuto del secondo post.",
    immagine: "/images/image2.jpg",
    tags: ["tutorial", "articolo", "guida"],
  },
  {
    titolo: "Post 3",
    contenuto: "Questo è il contenuto del terzo post.",
    immagine: "/images/image3.jpg",
    tags: ["notizie", "aggiornamenti", "novità"],
  },
  {
    titolo: "Post 4",
    contenuto: "Questo è il contenuto del quarto post.",
    immagine: "/images/image4.jpg",
    tags: ["idee", "progetto", "ispirazione"],
  },
  {
    titolo: "Post 5",
    contenuto: "Questo è il contenuto del quinto post.",
    immagine: "/images/image5.jpg",
    tags: ["blog", "tecnologia", "coding"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const response = {
    posts: posts,
    totalePosts: posts.length,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
