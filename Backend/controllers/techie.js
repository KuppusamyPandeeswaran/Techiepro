const Techie = require('../models/techie');

//User preference
exports.get_single_techie = async (req, res, next) => {
  const userid = req.params.id;
  // const userid = '1';
  console.log(userid);
  try {
    const outres = await Techie.singletechie(userid).then(function (val) {
      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(val);
        }, 200);
      });
      return promise;
    });

    if (outres.rows.length !== 1) {
      const error = new Error('userid could not found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = outres.rows[0];
    //console.log(storedUser)
    res.send(storedUser);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.get_all_techie = async (req, res, next) => {
  try {
    const result = await Techie.alltechie();

    if (result.rows.length === 0) {
      const error = new Error('Could not find any Techies.');
      error.statusCode = 404;
      throw error;
    }

    res.send(result.rows);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
