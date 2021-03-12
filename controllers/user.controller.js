const User = require('../models/user.model');

exports.user_register = function (req, res) {
        if(!req.body.email) {
            res.json({success: false, message:"You must provide email!!"});
        }
        else
        if(!req.body.username) {
            res.json({success: false, message:"You must provide username!!"});
        }
        else
        if (!req.body.password) {
            res.json({success: false, message:"You must provide password!!"});
        }
        else
        if(!req.body.phone) {
            res.json({success: false, message:"You must provide phone!!"});
        }
        else {


                let user = new User({
                    email : req.body.email.toLowerCase(),
                    username: req.body.username.toLowerCase(),
                    password : req.body.password,
                    phone : req.body.phone
                });

                //Save my user //
                user.save(function (err) {
                    if(err) {
                        if (err.code === 11000) {
                            res.json({success: false, message: "username or e-mail already exists!!"});
                        } else {
                            if (err.errors) {
                                if (err.errors.email) {
                                    res.json({success: false, message: err.errors.email.message});
                                }
                                else{
                                    if(err.errors.username) {
                                        res.json({success: false, message: err.errors.username.message});

                                    }
                                    else {
                                        if(err.errors.password) {
                                            res.json({success:false, message: err.errors.password.message});

                                        }
                                        else {
                                            res.json({success:false, message: err});

                                        }
                                    }
                                }

                            } else {
                                res.json({success: false, message: "could not save user. Error!!", err});
                            }
                        }
                    }
                    else {
                        res.json({success: true, message:"User saved", user});

                    }

                });
            };
        }

