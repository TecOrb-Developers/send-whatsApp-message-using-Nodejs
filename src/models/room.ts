import { Schema, model } from "mongoose";

interface roomSchema {
    roomId: Object;
    userId:Object;
    vendorId:Object;
    specId:Object;
    creator:Object;
    orderId:string;
    status:string;
    req_from:string;

  reason: string;
  isActive: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<roomSchema>(
  {
    roomId: { type: Schema.Types.ObjectId },
    userId: { type: Schema.Types.ObjectId},
    vendorId: { type: Schema.Types.ObjectId},
    specId: { type: Schema.Types.ObjectId},
    creator: { type: Schema.Types.ObjectId },
    orderId: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'Active'
    },
    req_from: {
        type: String
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

const roomModel = model<roomSchema>(
  "rooms",
  schema
);
export = roomModel;