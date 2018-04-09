const router = require('express').Router();
const kategori = require('../../controllers/kategori');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                kategori.add(req.body, kategoriId => res.json({kategoriId}))
                break;
            case 'edit':
                kategori.edit(req.body, req.body.data);
                res.json(req.body);
                break;
            case 'delete':
                kategori.delete(req.body);
                res.json(req.body);
                break;
            case 'read':
                kategori.read(req.body, result => res.json(result));
                break;
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;