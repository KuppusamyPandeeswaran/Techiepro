const db = require('../util/database');

module.exports = class Techie {
  constructor(uuid) {
    this.uuid = uuid;
  }

  //Retrieve Techie information
  static singletechie(userid) {
    return db.query(`SELECT public.get_single_techie('${userid}');`);
  }

  static alltechie() {
    return db.query(`SELECT public.get_all_techie();`);
  }
};
