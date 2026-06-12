import mongoose, { Schema, type Document } from 'mongoose'

export interface IProfile extends Document {
  userId: string
  skills: string[]
  interests: string[]
  goals: string[]
  cgpa: number
  year: string
  branch: string
}

const ProfileSchema = new Schema<IProfile>(
  {
    userId: { type: String, required: true },
    skills: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    goals: { type: [String], default: [] },
    cgpa: { type: Number, default: 0 },
    year: { type: String, default: '' },
    branch: { type: String, default: '' },
  },
  { timestamps: true }
)

const Profile = mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema)

export default Profile
