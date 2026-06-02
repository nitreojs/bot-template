import { Telegram } from 'puregram'

import { Env } from '@/env'

export const telegram = Telegram.fromToken(Env.TOKEN)
