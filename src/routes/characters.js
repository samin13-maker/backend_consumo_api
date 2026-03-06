import express from "express";
import { fetchCharacters } from "../services/api.service.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const characters = await fetchCharacters();

    res.json(characters);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching characters"
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const id = req.params.id;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching character"
    });

  }

});

export default router;