const conDB = require('./../utils/db');

module.exports = class Techie {
  constructor(uuid) {
    this.uuid = uuid;
  }

  // Getting single user
  static singletechie(userid) {
    return conDB.query(`SELECT public.single_profile('${userid}');`);
  }

  // Getting single users
  static alltechie() {
    return conDB.query(`SELECT public.all_profile()`);
  }

  // Updating single user
  static patchtechie(uid, fieldsToUpdate) {
    const {
      fullname,
      phoneno,
      address,
      dob,
      country,
      pwd,
      photoLoc,
      bio,
      memberLevel,
      role,
      modDate,
    } = fieldsToUpdate;

    const query = `
    SELECT update_profile(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
    )
`;

    const values = [
      uid,
      fullname !== undefined ? fullname : null,
      phoneno !== undefined ? phoneno : null,
      address !== undefined ? address : null,
      dob !== undefined ? dob : null,
      country !== undefined ? country : null,
      pwd !== undefined ? pwd : null,
      photoLoc !== undefined ? photoLoc : null,
      bio !== undefined ? bio : null,
      memberLevel !== undefined ? memberLevel : null,
      role !== undefined ? role : null,
      // modDate,
    ];

    console.log(values);

    return conDB.query(query, values);
  }
};
