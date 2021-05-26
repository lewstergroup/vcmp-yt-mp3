const router = require("express").Router();

const Middleware = require("./Cors");
const Controller = require("./controller");

module.exports = (app) => {
  router.get("/Search/:key", Controller.Search);
  router.get("/Download/:videoId", Controller.Download);
  router.get("/getfile/:file", Controller.GetFile);
  app.use(Middleware.Authenticate, router);

  return router;
};
