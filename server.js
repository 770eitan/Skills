import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import methodOveride from 'method-override'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter } from './routes/skills.js'



// set up app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// add middleware below the above line of code
app.use(function(req, res, next) {
  console.log('Hello SEI!')
  req.time = new Date().toLocaleTimeString()
  next()
})

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(methodOveride('_method'))
// mounted routers
app.use('/', indexRouter)
app.use('/skills', skillsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


app.set('view engine', 'ejs')
	



export {
  app
}
