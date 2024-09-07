import { NextResponse } from 'next/server';

export async function GET() {
  // Implement logic to fetch chats from your database
  const chats = [
    {
      id: '1',
      user: 'user1',
      messages: [
        { sender: 'user', content: 'Hello' },
        { sender: 'support', content: 'How can I help you?' },
      ],
    },
    // Add more chat data as needed
  ];

  return NextResponse.json(chats);
}