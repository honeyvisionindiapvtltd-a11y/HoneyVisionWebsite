import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String },
    role: { type: String },
    avatar: { type: String },
  },
  { timestamps: true }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;
