const { promisify } = require('util');
const { v4: uuid } = require('uuid');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Techie = require('./../models/techieModel');
const Login = require('./../models/authModel');

exports.signup = catchAsync(async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return next(new AppError('Please fill the required fields', 401));
  }

  const outres = await Login.techiesignup(uuid(), email, password, name);

  const signupResult = outres.rows[0].add_techie;

  if (signupResult.msg === 'Techie with this ID already exist') {
    return res.status(400).json({
      status: 'fail',
      message: signupResult.msg || 'Signup failed',
    });
  }
  const token = jwt.sign({ id: storedUser.memid }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: 'success',
    message: signupResult.msg || 'User registered successfully',
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { userORemail, password } = req.body;

  if (!userORemail || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Username or Email and password are required',
    });
  }
  const outres = await Login.techiesignin(userORemail, password);

  const user = outres.rows[0].login;

  if (!user) {
    return next(new AppError('Invalid Credientials', 401));
  }

  const token = jwt.sign({ id: user.memid }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  console.log({ token });

  res.status(200).json({
    status: 'success',
    token: token,
    user: user,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    const err = new AppError(
      'Your are not logged in!, please log in to get access',
      401
    );
    return next(err);
  }

  console.log({ getusers: token });

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // 3) Check if user still exists
  const outres = await Techie.singletechie(decoded.id);
  const currentUser = outres.rows[0].single_profile;

  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }
  req.user = currentUser;
  next();
});
