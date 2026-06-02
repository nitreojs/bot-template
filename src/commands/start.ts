import { START_MESSAGE } from '@/constants'

import { Command } from './command'

export const start = new Command({
  slug: 'start',
  trigger: /^\/start$/,
  handler: (context) => context.send(START_MESSAGE)
})
