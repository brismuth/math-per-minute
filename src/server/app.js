import fs from 'fs'
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import shrinkRay from 'shrink-ray'
import { serveStatic, cacheControl, strictTransportSecurity } from './middleware'
import { root, api } from './routes'

// likely our proxy will handle compression, cache-control, etc. these are healthy defaults
const app = express()
app.disable('x-powered-by')
app.use(shrinkRay())
app.use(strictTransportSecurity())
app.enable('trust proxy')

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

// api
app.use('/api', api)

app.use(serveStatic()) // immutable static content
app.use(cacheControl()) // cache control for the rest
app.use('/*', root) // preact client

export default app
