import superjson from 'superjson'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@aws-lambda-trpc-serverless-framework-v3/api/src/routers/app'

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_API_URL!,
      transformer: superjson,
    }),
  ],
})
