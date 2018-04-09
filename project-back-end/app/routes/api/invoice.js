const router = require('express').Router();
const invoice = require('../../controllers/invoice');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                invoice.add(req.body, invoiceId => res.json({invoiceId}))
                break;
            case 'read':
                invoice.read(req.body, val => res.json(val))
                break;
            case 'checkout':
            default: res.status(404).json('Not Found')
        }
    })


module.exports = router;