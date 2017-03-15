import express from 'express'
import path from 'path'

const router = express.Router();

// these are all your public routes that don't require a jwt from client

router.get('/', (req, res) => {
  res.send('got public route')
})

router.post('/login', (req, res) => {
  console.log('logged in', req.headers);
  res.json('login')
})

export default router;