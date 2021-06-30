const { Router } = require("express");
const router = Router();
const { FetchData } = require("../lib/data");
router.get("/personaje/:id", (req, res) => {
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
      res.send('No hay elementos')
    }
  })();
});

module.exports.RouterIndex = router;
