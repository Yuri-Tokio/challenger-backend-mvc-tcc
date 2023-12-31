const router = require("express").Router()

// cada rota acessara uma funcionalidade de endpoint
const produtoController = require("../controllers/produtoController");

// função que criara os dados no banco baseado no endpoint da produtoController
router
    .route("/produtos")
    .post((req, res) => produtoController.create(req, res));

router  
    .route("/produtos")
    .get((req, res) => produtoController.getAll(req, res));

router  
    .route("/produtos/:id")
    .get((req, res) => produtoController.get(req, res));

router  
    .route("/produtos/:id")
    .delete((req, res) => produtoController.delete(req, res));

router  
    .route("/produtos/:id")
    .put((req, res) => produtoController.update(req, res));
module.exports = router;