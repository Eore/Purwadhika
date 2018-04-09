const router = require('express').Router();
const warna = require('../../controllers/warna');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                warna.add(req.body, warnaId => res.json({warnaId}))
                break;
            case 'edit':
                warna.edit(req.body, req.body.data);
                res.json(req.body);
                break;
            case 'delete':
                warna.delete(req.body);
                res.json(req.body);
                break;
            case 'read':
                warna.read(req.body, result => res.json(result));
                break;
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;