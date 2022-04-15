const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Todo App',
        message: 'Hello World',
        isIndex: true
    });
});

router.get('create', (req, res) => {
    res.render('create', {
        title: 'Create Todo',
        isCreate: true
    });
});    

module.exports = router;