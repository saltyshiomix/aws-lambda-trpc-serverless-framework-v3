import { router, mergeRouters } from '../trpc'
import { messageRouter } from './message'

export const appRouter = router({
  message: mergeRouters(messageRouter),
})

export type AppRouter = typeof appRouter
