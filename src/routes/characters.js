import express from "express";
import {
  fetchCharacters,
  fetchCharacterById
} from "../services/api.service.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const { page = 1, name = "" } = req.query;

    const data = await fetchCharacters(page, name);

    res.json(data);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching characters"
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const character = await fetchCharacterById(id);

    res.json(character);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching character"
    });

  }

});


export default router;