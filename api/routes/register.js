let express = require('express');
let router = express.Router();
let exec = require('child_process').exec;
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

router.post('/', (req, res) => {
    exec('cd ../filament & npm run register');
    
    sleep(5000).then(() => {
        res.json({
            success: true,
            error: null
        });
    });
});

module.exports = router;