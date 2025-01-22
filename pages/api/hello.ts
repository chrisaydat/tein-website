// pages/api/hello.ts
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export default async function handler(_req: NextRequest) { 
  return new Response(JSON.stringify({ message: 'Hello from the Edge!' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}