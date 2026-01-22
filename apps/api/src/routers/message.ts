import { z } from 'zod'
import { router, publicProcedure } from '../trpc'

const sleep = async (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))

export const messageRouter = router({
  sayHello: publicProcedure
    .input(z.object({ name: z.string() }))
    .output(z.object({ message: z.string() }))
    .query(async ({ ctx, input }) => {
      console.log(`API Version: ${ctx.apiVersion}`)

      await sleep(1000)

      return {
        message: `Hello ${input.name}`,
      }
    }),
})
