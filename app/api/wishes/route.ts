import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://go-vercel-wedding-invitation.vercel.app/api/wishes/list', {
      headers: {
        'x-api-key-wedding': process.env.WEDDING_API_KEY || '',
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in Wishes API route:', error);
    return NextResponse.json(
      { status: false, message: 'Failed to fetch wishes' },
      { status: 500 }
    );
  }
} 