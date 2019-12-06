import express from "express";
import bodyParser from "body-parser";

import artists from "./db/db";

// setup express apps
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all artists
app.get("/v1/artists", (req, res) => {
  res.status(200).send(artists);
});

// add an artist
app.post("/v1/artists", (req, res) => {
  const artistName = req.body.username;
  if (!artistName) {
    return res.status(400).send({
      result: "fail",
      message: "artist name is required"
    });
  }

  const artist = { username: artistName };
  artists.push(artist);

  return res.status(200).send({
    result: "success",
    message: "Artist added successfully",
    type: "add",
    artist
  });
});

// get an artist
app.get("/v1/artists/:username", (req, res) => {
  artists.forEach(artist => {
    if (artist.username === req.params.username) {
      return res.status(200).send({
        result: "success",
        artist
      });
    }
  });

  return res.status(404).send({
    result: "fail",
    message: "Artist not found"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
