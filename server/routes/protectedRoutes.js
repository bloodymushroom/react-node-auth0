import express from 'express'
import path from 'path'

const router = express.Router();

// these are all your protected routes that do require a jwt from client
// the request url will be from '/api', e.g. localhost/api/login

router.get('/home', (req, res) => {
  console.log('got route')
  res.json('got private route')
})

router.get('/data', (req, res) => {
  console.log('private login')
  res.json('got private data')
})

router.post('/data', (req, res)=>{
  let foodJokes = [
  {
    id: 99991,
    joke: "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle."
  },
  {
    id: 99992,
    joke: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
  },
  {
    id: 99993,
    joke: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
  },
  {
    id: 99994,
    joke: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
  },
  {
    id: 99995,
    joke: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
  },
  {
    id: 99996,
    joke: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
  } 
  ];
  res.json(foodJokes);
})

export default router;