const { Status } = require("./Constants.json");
module.exports = {
  Authenticate: (req, res, next) => {
    // const Auth = req.headers && req.headers["authorization"];
    // if (Auth && Auth === `Bearer ${process.env.SECRET_TOKEN}`) return next();
    // return res.json({
    //   status: Status.ERROR,
    //   message: "No Secret Token found",
    // });
    return next();
  },
};
