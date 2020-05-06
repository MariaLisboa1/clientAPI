const router = require("express").Router();
const upload = require("../../config/multer");
const ClientController = require("../controllers/clients");
const clientModel = require("../models/Client");
const clientController = new ClientController(clientModel);
const auth = require("../middlewares/auth");

router.get("/", auth, (req, res) => clientController.getAll(req, res));
router.post("/", auth, (req, res) => clientController.create(req, res));
router.get("/:id", auth, (req, res) => clientController.getById(req, res));
router.delete("/:id", auth, (req, res) => clientController.remove(req, res));
router.put("/:id", auth, (req, res) => clientController.update(req, res));
router.post("/image/:id", auth, upload.single("image"), (req, res) =>
  clientController.saveImage(req, res)
);

module.exports = router;
