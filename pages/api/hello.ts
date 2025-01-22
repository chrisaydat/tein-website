// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify({ message: 'Hello from the Edge!' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
