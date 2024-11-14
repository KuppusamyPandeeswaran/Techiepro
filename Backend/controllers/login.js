const Login = require('../models/login');

//User login
exports.techie_signin = async (req, res, next) => {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.status(400).json({
      status: 'fail',
      message: 'Email and password are required',
    });
  }

  try {
    const outres = await Login.techielogin(email);

    if (!outres || !outres.rows || outres.rows.length !== 1) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email or password',
      });
    }

    const loginResult = outres.rows[0].techie_login;
    if (loginResult.msg === 'not allowed') {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email or password',
      });
    }

    const storedUser = loginResult.status.profile;

    res.status(200).json({
      status: 'success',
      data: {
        user: storedUser,
      },
    });
  } catch (err) {
    console.error('Error in techie_signin:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during sign in',
    });
  }
};
