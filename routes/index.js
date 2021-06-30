const { Router } = require("express");
const router = Router();
const { FetchData } = require("../lib/data");
router
  .get("/personaje/:id", (req, res) => {
    const {
      params: { id },
    } = req;
    (async () => {
      try {
        var perID = await FetchData.getCharacter(id);
        console.log(perID);
        res.json({
          msg: "Personaje encontrado",
          body: perID,
        });
      } catch (error) {
        console.log("No se encontraron elementos");
        res.send(error);
      }
    })();
  })
  .get("/personaje-ids/:ids", (req, res) => {
    const {
      params: { ids },
    } = req;
    (async () => {
      try {
        var arregloIds = ids.split(",");
        var perids = await FetchData.getSpecificCharacters(arregloIds);
        res.json({
          msg: "Lista de personajes",
          body: perids,
        });
      } catch (error) {
        res.send(error);
      }
    })();
  })
  .get("/per-pag/:pag", (req, res) => {
    const {
      params: { pag },
    } = req;
    (async () => {
      try {
        var perpag = await FetchData.getByPage(pag);
        res.json({
          msg: "Personajes de la página " + pag,
          body: perpag,
        });
      } catch (error) {
        res.send(error);
      }
    })();
  })
  .get("/personaje", (req, res) => {
    const {
      query: { gen, pag },
    } = req;
    (async () => {
      try {
        res.json({
          msg: "Genero: " + gen + ", Página: " + pag,
          body: await FetchData.getByCharacterGender(gen,pag),
        });
      } catch (error) {
        res.send(error);
      }
    })();
  });

module.exports.RouterIndex = router;
