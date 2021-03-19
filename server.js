
const dotenv = require("dotenv");
dotenv.config('.env');
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  
  const indexRouter = require('./routers/index')
  const authorsRouter = require('./routers/author')
  const bodyParser = require('body-parser')
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({limit: '10mb', extended:false}))

  const mongoose = require('mongoose')
  mongoose.connect("mongodb://localhost:27017/myBrary", { useNewUrlParser: true,  useUnifiedTopology: true})
  mongoose.set('useCreateIndex', true);
  
  app.use('/', indexRouter)
  app.use('/authors',authorsRouter)

app.listen(process.env.PORT || 3000, () =>{
    console.log(`server listeing on port http://localhost:3000`)
})