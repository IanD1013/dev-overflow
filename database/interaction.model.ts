import { model, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true }, // upvote / downvote / view
    actionId: { type: Schema.Types.ObjectId, required: true }, // question id / answer id / user id
    actionType: { type: String, enum: ["question", "answer"], required: true }, // question / answer /
  },
  { timestamps: true }
);

const Interaction = models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
