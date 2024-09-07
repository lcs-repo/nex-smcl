import mongoose, { Schema, Document } from 'mongoose';

interface IMessage {
  sender: string;
  content: string;
  timestamp: Date;
}

interface IChat extends Document {
  sessionId: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema: Schema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  messages: [{
    sender: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);