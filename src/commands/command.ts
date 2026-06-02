import type { MessageUpdate } from 'puregram'

export type CommandHandler = (context: MessageUpdate) => unknown

export interface CommandOptions {
  slug: string
  trigger: RegExp
  handler: CommandHandler
}

export class Command {
  constructor (private options: CommandOptions) {}

  get slug () {
    return this.options.slug
  }

  get handler () {
    return this.options.handler
  }

  test (text: string) {
    return this.options.trigger.test(text)
  }
}
