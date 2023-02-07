import { staticConstants, sessionConstants } from './constants.js'
import express, { Request, Response, NextFunction } from 'express'
import body from 'body-parser'
import cookie from 'cookie-parser'
import session from 'express-session'
import { ConversationServices } from './conversation.js'

function bootstrap() {
  const app = express()

  app.use(body.json())
  app.use(body.urlencoded({ extended: true }))
  app.use(cookie())
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: sessionConstants.secret,
    }),
  )

  app.post('/conversation', onPostConversation)
  app.use('/', staticFile)

  app.listen(3003, '0.0.0.0')
}

function staticFile(req: Request, res: Response, next: NextFunction) {
  console.log(req.session.id)

  return express.static(staticConstants.root)(req, res, next)
}

async function onPostConversation(req: Request, res: Response, next: NextFunction) {
  const result = await ConversationServices.receiveMessage({
    message: req.body['message'],
    conversationId: req.body['conversationId'],
    parentMessageId: req.body['parentMessageId'],
  })

  return res.json(result)
}

bootstrap()
