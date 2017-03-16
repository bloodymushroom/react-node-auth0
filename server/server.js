import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// auth
import jwt from 'express-jwt'

// allow .env
import dotenv from 'dotenv'
dotenv.config()

// routes
import publicRoutes from './routes/publicRoutes.js'
import protectedRoutes from './routes/protectedRoutes.js'

// set port
const app = express();
const port = process.env.PORT || 3003;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors middleware
app.use(cors())


// set up jwt
const authCheck = jwt({
  secret: process.env.CLIENT_SECRET,
  audience: process.env.CLIENT_ID
});

// server static files from dist folder
// app.use(express.static('dist'));

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json('Something broke!')
})

// use routes
app.use('/', express.static('dist'), publicRoutes)
app.use('/api', authCheck, protectedRoutes)


app.get('*', (req, res) => {
  res.redirect('/')
})

// open up port
app.listen(port, () => {
  console.log(`Cors-enabled server listening on port ${port}!`);
})
