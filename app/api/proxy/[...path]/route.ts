import { NextResponse } from 'next/server'

const API_BASE_URL = 'http://13.113.249.51:8000'

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    params = await params
    const path = params.path.join('/')
    const url = new URL(request.url)
    const searchParams = url.searchParams.toString()

    const response = await fetch(`${API_BASE_URL}/${path}${searchParams ? `?${searchParams}` : ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to proxy request to ${path}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to proxy request' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    params = await params
    const path = params.path.join('/')
    console.log(path)
    const body = await request.json()

    const response = await fetch(`${API_BASE_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Failed to proxy request to ${path}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to proxy request' },
      { status: 500 }
    )
  }
} 