const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/Sauce");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

/*route utiliser pour poster, voir, modifier, supprimer, liker, et disliké les sauces*/
router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.getOneSauce);

module.exports = router;
