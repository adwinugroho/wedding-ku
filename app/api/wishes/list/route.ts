import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://go-vercel-wedding-invitation.vercel.app/api/wishes/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key-wedding': process.env.WEDDING_API_KEY || '',
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in wishes API route:', error);
    return NextResponse.json(
      { status: false, message: 'Failed fetch wishes' },
      { status: 500 }
    );
  }
}

