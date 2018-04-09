const router = require('express').Router();
const produk = require('../../controllers/produk');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                produk.add(req.body, produkId => res.json({produkId}))
                break;
            case 'edit':
                produk.edit(req.body, req.body.data);
                res.json(req.body);
                break;
            case 'delete':
                produk.delete(req.body);
                res.json(req.body);
                break;
            case 'read':
                produk.read(req.body, result => res.json(result));
                break;
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;