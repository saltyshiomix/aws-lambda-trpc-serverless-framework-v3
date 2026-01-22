import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda'
import { appRouter } from '../routers/app'
import { createContext } from '../trpc'

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
  responseMeta() {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  },
})
