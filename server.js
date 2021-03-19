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
  mongoose.connect("mongodb+srv://admin-vishal:Gabbar25@cluster0.6kijb.mongodb.net/myBraryDB", { useNewUrlParser: true,  useUnifiedTopology: true})
  mongoose.set('useCreateIndex', true);
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'))
  
  app.use('/', indexRouter)
  app.use('/authors',authorsRouter)

app.listen(process.env.PORT || 3000, () =>{
    console.log(`server listeing on port http://localhost:3000`)
})