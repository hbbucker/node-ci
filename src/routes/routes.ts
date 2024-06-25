import express from 'express';
import { Math } from '../math';

const router = express.Router();
const math = new Math();

router.get('/sum', function (req, res, next) {
    console.log('sum');
    res.send(math.sum(2, 3).toString());
});

router.get('/sub', function (req, res, next) {
    console.log('sub');
    res.send(math.sub(2, 3).toString());
});

router.get('/mult', function (req, res, next) {
    console.log('mult');   
    res.send(math.mult(2, 3).toString());
});


export default router;