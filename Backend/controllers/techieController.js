const Techie = require('../models/techieModel');

exports.get_single_techie = async (req, res, next) => {
  const userid = req.params.id;
  if (!userid) {
    return res.status(400).json({
      status: 'fail',
      message: 'User ID is required',
    });
  }

  try {
    const outres = await Techie.singletechie(userid);
    console.log(outres);

    if (!outres || !outres.rows || outres.rows.length !== 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Techie not found',
      });
    }

    const storedUser = outres.rows[0].single_profile.status;

    res.status(200).json({
      status: 'success',
      data: {
        user: storedUser,
      },
    });
  } catch (err) {
    console.error('Error in get_single_techie:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while fetching the Techie',
    });
  }
};

exports.get_all_techie = async (req, res, next) => {
  try {
    const outres = await Techie.alltechie();

    if (!outres.rows || outres.rows.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'Could not find any Techies',
      });
    }
    const techies = outres.rows[0].all_profile;

    if (!Array.isArray(techies) || techies.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No Techies found',
      });
    }

    res.status(200).json({
      status: 'success',
      results: techies.length,
      data: {
        users: techies,
      },
    });
  } catch (err) {
    console.error('Error in get_all_techie:', err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      status: 'error',
      message: 'An error occurred while fetching Techies',
    });
  }
};

exports.update_techie = async (req, res, next) => {
  const userid = req.params.id;
  const { uname, uemail, mobile, urole, addr } = req.body;

  if (!userid) {
    return res.status(400).json({
      status: 'fail',
      message: 'User ID is required to update techie details',
    });
  }

  const fieldsToUpdate = {};
  if (uname !== undefined) fieldsToUpdate.uname = uname;
  if (uemail !== undefined) fieldsToUpdate.uemail = uemail;
  if (mobile !== undefined) fieldsToUpdate.mobile = mobile;
  if (urole !== undefined) fieldsToUpdate.urole = urole;
  if (addr !== undefined) fieldsToUpdate.addr = addr;

  if (Object.keys(fieldsToUpdate).length === 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'No fields provided for update',
    });
  }

  try {
    await Techie.patchtechie(userid, fieldsToUpdate);
    // const outres = await Techie.patchtechie(userid, fieldsToUpdate);

    // console.log(outres.rows[0].update_techie);

    // if (!outres || outres.rowCount === 0) {
    //   return res.status(404).json({
    //     status: 'fail',
    //     message: 'No user found to update',
    //   });
    // }

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
    });
  } catch (err) {
    console.error('Error in patch_single_techie:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during update',
    });
  }
};
