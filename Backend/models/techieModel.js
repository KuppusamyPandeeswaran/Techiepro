const db = require('../util/database');

module.exports = class Techie {
  constructor(uuid) {
    this.uuid = uuid;
  }

  // Getting single user
  static singletechie(userid) {
    return db.query(`SELECT public.single_profile('${userid}');`);
  }

  // Getting single users
  static alltechie() {
    return db.query(`SELECT public.all_profile()`);
  }

  // Updating single user
  static patchtechie(uid, fieldsToUpdate) {
    const { uname, uemail, mobile, urole, addr } = fieldsToUpdate;

    const query = `
        SELECT update_techie(
            $1, $2, $3, $4, $5, $6, NULL
        )
    `;

    const values = [
      uid,
      uname !== undefined ? uname : null,
      uemail !== undefined ? uemail : null,
      mobile !== undefined ? mobile : null,
      urole !== undefined ? urole : null,
      addr !== undefined ? addr : null,
    ];

    return db.query(query, values);
  }
};
