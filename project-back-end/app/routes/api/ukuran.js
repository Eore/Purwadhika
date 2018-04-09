const router = require('express').Router();
const ukuran = require('../../controllers/ukuran');

router.route('/:method')
    .post((req, res) => {
        switch (req.params.method) {
            case 'add':
                ukuran.add(req.body, ukuranId => res.json({ukuranId}))
                break;
            case 'edit':
                ukuran.edit(req.body, req.body.data);
                res.json(req.body);
                break;
            case 'delete':
                ukuran.delete(req.body);
                res.json(req.body);
                break;
            case 'read':
                ukuran.read(req.body, result => res.json(result));
                break;
            default: res.json(404, 'Not Found')
        }
    })

module.exports = router;