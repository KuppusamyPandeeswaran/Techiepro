const Techie = require('../models/techieModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

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

exports.get_all_techie = catchAsync(async (req, res, next) => {
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
});

exports.update_techie = catchAsync(async (req, res, next) => {
  const {
    name,
    phone,
    address,
    dob,
    country,
    password,
    photoLoc,
    bio,
    memberLevel,
    role,
  } = req.body;

  const fieldsToUpdate = {};
  if (name !== undefined) fieldsToUpdate.fullname = name;
  if (phone !== undefined) fieldsToUpdate.phoneno = phone;
  if (address !== undefined) fieldsToUpdate.address = address;
  if (dob !== undefined) fieldsToUpdate.dob = dob;
  if (country !== undefined) fieldsToUpdate.country = country;
  if (password !== undefined) fieldsToUpdate.pwd = pwd;
  if (photoLoc !== undefined) fieldsToUpdate.photoLoc = photoLoc;
  if (bio !== undefined) fieldsToUpdate.bio = bio;
  if (memberLevel !== undefined) fieldsToUpdate.memberLevel = memberLevel;
  if (role !== undefined) fieldsToUpdate.role = role;

  if (Object.keys(fieldsToUpdate).length === 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'No fields provided for update',
    });
  }

  fieldsToUpdate.modDate = Date.now();

  console.log(fieldsToUpdate);
  const outres = await Techie.patchtechie(req.user.memid, fieldsToUpdate);

  const updatedUser = outres.rows[0].update_profile;

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: {
      user: updatedUser,
    },
  });
});
