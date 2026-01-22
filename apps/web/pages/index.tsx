import React from 'react'
import { trpc } from '@/lib/trpc'
import Head from 'next/head'

export default function HomePage() {
  const [message, setMessage] = React.useState('')

  return (
    <React.Fragment>
      <Head>
        <title>tRPC ♡ Serverless Framework</title>
      </Head>
      <div>
        <button
          onClick={async () => {
            setMessage('Loading...')
            try {
              const { message } = await trpc.message.sayHello.query({
                name: 'World',
              })
              setMessage(message)
            } catch (error) {
              setMessage(JSON.stringify(error, null, 2))
            }
          }}
        >
          Click Me!
        </button>
        <pre>{message}</pre>
      </div>
    </React.Fragment>
  )
}
