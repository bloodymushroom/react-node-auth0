import express from 'express'
import path from 'path'

const router = express.Router();

// these are all your public routes that don't require a jwt from client
// the request url will be from '/', e.g. localhost/home

router.get('/', (req, res) => {
  res.json('got public route')
})

router.get('/data', (req, res) => {
  console.log('logged in', req.headers);
  res.json('got public data')
})

export default router;