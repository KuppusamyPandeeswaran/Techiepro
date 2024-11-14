const Login = require('../models/login');

//User login
exports.techie_login = async (req, res, next) => {
    const email = req.body.email;
    const pwd = req.body.pwd;
    try {
        const outres = await Login.techielogin(email).then(function (val) {
            let promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(val);
                }, 200);
            })
            return promise;
        });

        
        if (outres.rows.length !== 1) {
            const error = new Error('Unauthorized access.');
            error.statusCode = 401;
            throw error;
        }
        else if(outres.rows[0].techie_login.msg == 'not allowed'){
            const error = new Error('username and password you entered don`t match.');
            error.statusCode = 401;
            throw error;
        }
        

        if(pwd == outres.rows[0].techie_login.status.profile.pwd){
            const storedUser = outres.rows[0].techie_login.status.profile;
            console.log(storedUser);
            res.send(storedUser);
        }
        else{
            const error = new Error('Unauthorized access.');
            error.statusCode = 401;
            throw error;
        }

        
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

};