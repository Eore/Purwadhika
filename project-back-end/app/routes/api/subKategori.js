const router = require('express').Router();
const subKategori = require('../../controllers/subKategori');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                subKategori.add(req.body, subKategoriId => res.json({subKategoriId}))
                break;
            case 'edit':
                subKategori.edit(req.body, req.body.data);
                res.json(req.body);
                break;
            case 'delete':
                subKategori.delete(req.body);
                res.json(req.body);
                break;
            case 'read':
                subKategori.read(req.body, result => res.json(result));
                break;
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;