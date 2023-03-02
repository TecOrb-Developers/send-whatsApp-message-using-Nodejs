import { Schema, model } from "mongoose";

interface messageSchema {
  roomId: Object;
  userId: Object;
  vendorId: Object;
  specId: Object;
  message: string;
  image: string;
  readStatus: boolean;
  message_type: string;
  send_from: string;
  send_to: string;
  date: string;

  reason: string;
  isActive: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<messageSchema>(
  {
    roomId: { type: Schema.Types.ObjectId, ref: "bookings" },
    message: { type: String, default: "" },
    image: { type: String, default: "" },
    userId: { type: Schema.Types.ObjectId },
    vendorId: { type: Schema.Types.ObjectId },
    specId: { type: Schema.Types.ObjectId },
    readStatus: {
      type: Boolean,
      default: false,
    },
    message_type: {
      type: String,
      default: "",
    },
    send_from: {
      type: String,
      default: "",
    },
    send_to: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  },
  {
    // timestamps: true,
    versionKey: false,
  }
);

const messageModel = model<messageSchema>("messages", schema);
export = messageModel;
