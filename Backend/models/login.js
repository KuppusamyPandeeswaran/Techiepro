const db = require('../util/database');

module.exports = class Techie {
  constructor(uuid) {
    this.uuid = uuid;
  }

  //Retrieve Techie information
  static techielogin(email) {
    return db.query(`SELECT public.techie_login('${email}');`);
  }
};

//signup
// select add_techie(5, 'Ganesh', 'ganesh@cli.in', '8674532148', 'Jr.Software engineer', 'Chennai', '125879')

// select * from team_member
