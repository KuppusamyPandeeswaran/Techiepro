const Techie = require('../models/techie');

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
    if (!outres || !outres.rows || outres.rows.length !== 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Techie not found',
      });
    }

    const storedUser = outres.rows[0].get_single_techie;

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
    const techies = outres.rows[0].get_all_techie;

    if (!Array.isArray(techies) || techies.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No Techies found in the database',
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
