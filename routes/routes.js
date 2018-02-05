const express = require('express'),
    // app = expres(),
    router = express.Router();
    controllers = require('../controllers/controllers');

router.all('/all', controllers.all);
router.get('/find', controllers.find);
router.post('/add', controllers.add);
router.delete('/remove', controllers.remove);
router.put('/update', controllers.update);
// router.post('/save',)

module.exports = router;