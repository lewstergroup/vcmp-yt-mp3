var TAFFY = require("taffy");
const fs = require("fs");
const { MaxDBFiles } = require("./Constants.json");
const databasePath = "../database.json";
const database = require(databasePath);
var db = TAFFY(database);

module.exports = {
  Insert: (name) => {
    if (db().get().length >= MaxDBFiles) {
      const first = db().first();
      fs.unlinkSync(`${__dirname}/downloads/${first.name}`);
      db().getDBI().remove(first.___id);
      db().getDBI().removeCommit();
    }

    db.insert({ name });

    fs.writeFileSync("database.json", db().stringify(), "utf8");
  },
};
