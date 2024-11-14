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
