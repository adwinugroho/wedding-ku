import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://go-vercel-wedding-invitation.vercel.app/api/rsvp/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key-wedding': process.env.WEDDING_API_KEY || '',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in RSVP API route:', error);
    return NextResponse.json(
      { status: false, message: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}

