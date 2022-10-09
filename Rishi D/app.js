const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes');
const cookieParser=require('cookie-parser');
const { requireAuth, checkUser } =require('./middleware/authMiddleware');

const app = express();
app.use(express.json());
app.use(cookieParser());
// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://login_auth:loginauth@cluster0.ybwdcso.mongodb.net/test';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3002))
  .catch((err) => console.log(err));




// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.use(authRoutes);


