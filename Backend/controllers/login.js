const Login = require('../models/login');

///////////techieSigninHandler

exports.techie_signin = async (req, res, next) => {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.status(400).json({
      status: 'fail',
      message: 'Email and password are required',
    });
  }

  try {
    const outres = await Login.techiesignin(email);

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

///////////techieSignupHandler

exports.techie_signup = async (req, res, next) => {
  const { uid, uname, uemail, mobile, urole, addr, pwd } = req.body;

  if (!uid || !uemail || !pwd || !uname) {
    return res.status(400).json({
      status: 'fail',
      message: 'Uid, Name, email, and password are required',
    });
  }

  try {
    const outres = await Login.techiesignup(
      uid,
      uname,
      uemail,
      mobile,
      urole,
      addr,
      pwd
    );

    const signupResult = outres.rows[0].add_techie;

    if (signupResult.msg === 'Techie with this ID already exist') {
      return res.status(400).json({
        status: 'fail',
        message: signupResult.msg || 'Signup failed',
      });
    }

    res.status(201).json({
      status: 'success',
      message: signupResult.msg || 'User registered successfully',
    });
  } catch (err) {
    console.error('Error in techie_signup:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during signup',
    });
  }
};
