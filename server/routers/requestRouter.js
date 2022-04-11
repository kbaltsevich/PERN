const Router = require("express");
const router = new Router();
const requestController = require("../controllers/requestController");
const reqMiddleware = require("../middleware/reqMiddleware");

router.post("/", reqMiddleware, requestController.create);
router.get("/", reqMiddleware, requestController.getAll);
router.get("/:id", requestController.getOne);

module.exports = router;
