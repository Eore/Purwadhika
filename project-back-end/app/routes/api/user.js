const router = require('express').Router();
const bcrypt = require('bcrypt');
const fn = require('../../functions');

router.route('/:method')
    .post((req, res) => {
        let userId = fn.generateId()
        switch (req.params.method) {
            case 'add':
                fn.read('user', {username: req.body.username}, val => {
                    if (val.length > 0)
                        res.json(undefined)
                    else
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(req.body.password, salt, (err, hash) => {
                                fn.create('user', {
                                    ...req.body,
                                    id: userId,
                                    password: hash,
                                    role: 100,
                                    createAt: new Date()
                                })
                                console.log(`${req.body.username} telah terdaftar`);
                                res.json({userId})     
                            })
                        })
                })
                break;
        }
    })  

module.exports = router;