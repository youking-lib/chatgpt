import { memoize } from 'lodash-es'
import fetch from 'node-fetch'
import { chatgptConstants } from './constants.js'

export type CoversationInput = {
  conversationId?: string
  parentMessageId?: string
  message: string
}

global.fetch = fetch

export const ConversationServices = {
  async receiveMessage(options: CoversationInput) {
    const api = await getChatgptApi()
    const res = await api.sendMessage(options.message, {
      conversationId: options.conversationId,
      parentMessageId: options.parentMessageId,
    })

    console.log('coversation - send', options)
    console.log('coversation - receive', options)

    return res
  },
}

const getChatgptApi = memoize(async function () {
  const { ChatGPTAPI } = await import('chatgpt')

  return new ChatGPTAPI({
    apiKey: chatgptConstants.apiKey,
    debug: true,
  })
})
