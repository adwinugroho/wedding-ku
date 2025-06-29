import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://go-vercel-wedding-invitation.vercel.app/api/gifts/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key-wedding': process.env.WEDDING_API_KEY || '',
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in gifts GET API route:', error);
    return NextResponse.json(
      { status: false, message: 'Failed to fetch gift recommendations' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://go-vercel-wedding-invitation.vercel.app/api/gifts/booked', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key-wedding': process.env.WEDDING_API_KEY || '',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in gifts PUT API route:', error);
    return NextResponse.json(
      { status: false, message: 'Failed to update gift status' },
      { status: 500 }
    );
  }
} 