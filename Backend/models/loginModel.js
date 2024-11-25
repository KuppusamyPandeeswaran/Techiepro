const db = require('../util/database');

module.exports = class Techie {
  constructor(uuid) {
    this.uuid = uuid;
  }

  //Retrieve Techie information
  static techiesignin(userORemail, pwd) {
    return db.query(`SELECT public.login('${userORemail}', '${pwd}')`);
  }
  static techiesignup(uid, uname, uemail, mobile, urole, addr, pwd) {
    return db.query(
      `SELECT public.add_techie(${uid}, '${uname}', '${uemail}', '${mobile}', '${urole}', '${addr}', '${pwd}');`
    );
  }
};

//signup
// select add_techie(5, 'Ganesh', 'ganesh@cli.in', '8674532148', 'Jr.Software engineer', 'Chennai', '125879')

// select * from team_member
