let express = require('express');
let router = express.Router();
let exec = require('child_process').exec;

router.get('/', (req, res) => {
    console.log(__dirname);
    exec('cd ../filament & npm run start', (stdout, stderr, error) => {
        console.log(stdout);
        console.log(stderr);
        console.log(error);
        if (error) {
            res.json({
                success: false,
                error: error,
            });
        } else {
            res.json({
                success: true,
                error: null
            });
        }
    });
});

module.exports = router;