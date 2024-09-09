import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Chat from '../../../models/Chat';

export async function GET() {
  try {
    await dbConnect();
    const chats = await Chat.aggregate([
      { $sort: { 'messages.timestamp': -1 } },
      { $group: {
          _id: '$sessionId',
          id: { $first: '$_id' },
          sessionId: { $first: '$sessionId' },
          messages: { $push: '$messages' }
        }
      },
      { $limit: 50 }
    ]);
    return NextResponse.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    return NextResponse.json({ error: 'Error fetching chats' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { sessionId, sender, content } = await request.json();

    if (!sessionId || !sender || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
  
    const chat = await Chat.findOneAndUpdate(
      { sessionId },
      { 
        $push: { 
          messages: { sender, content, timestamp: new Date() } 
        },
        $setOnInsert: { createdAt: new Date() },
        $set: { updatedAt: new Date() }
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, chat });
  } catch (error) {
    console.error('Error saving chat:', error);
    return NextResponse.json({ error: 'Error saving chat' }, { status: 500 });
  }
}