import path from 'path'
import dotenv from 'dotenv-safe'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('url', __dirname)

export const chatgptConstants = {
  apiKey: process.env.OPENAI_API_KEY,
}

export const staticConstants = {
  root: path.resolve(__dirname, '../public'),
}

export const sessionConstants = {
  secret: 'chatgpt-demo',
}
