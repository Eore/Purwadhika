const router = require('express').Router();
const cart = require('../../controllers/cart');


router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                if (req.session.cart === undefined) req.session.cart = []
                req.session.cart = cart.addItem(req.body, req.session.cart)
                req.session.save();
                res.json(req.session.cart)
                break;
            case 'edit':
                req.session.cart = cart.delItem(req.body.idProduk, req.session.cart)
                req.session.save();
                res.json(req.session.cart);                
                break;
            case 'delete':
                req.session.cart = undefined;
                req.session.save();
                res.json(req.session.cart);                
                break;
            case 'read':
                res.json(req.session.cart);
                break;
            case 'checkout':
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;