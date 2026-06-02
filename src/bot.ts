import { Color, Logger } from '@starkow/logger'

import commands from '@/commands'
import { telegram } from '@/shared/telegram'

telegram.onMessage((context) => {
  const text = context.text ?? ''

  for (const command of commands) {
    if (command.test(text)) {
      return command.handler(context)
    }
  }
})

const main = async () => {
  await telegram.startPolling()

  Logger.create(`@${telegram.bot.username}`)('started')
}

main().catch(Logger.create('error!', Color.Red).error)
