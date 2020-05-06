const router = require("express").Router();
const autheticationRoutes = require("./authentication");
const clientsRoutes = require("./clients");
const usersRoutes = require("./users");

router.use("/", autheticationRoutes);
router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);

module.exports = router;
