import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda'
import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import type { APIGatewayProxyEventV2 } from 'aws-lambda'

export const createContext = async ({
  event,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>): Promise<{
  event: APIGatewayProxyEventV2
  apiVersion: string
}> => {
  return {
    event,
    apiVersion: '2026-01-01',
  }
}

type Context = Awaited<ReturnType<typeof createContext>>

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const router = t.router

export const mergeRouters = t.mergeRouters

export const publicProcedure = t.procedure
