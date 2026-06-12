import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  password: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
  matchPassword(enteredPassword: string): Promise<boolean>
}

const UserSchema = new Schema<IUser>(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'], 
      trim: true 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'], 
      minlength: [6, 'Password must be at least 6 characters'] 
    },
    avatar: { 
      type: String 
    },
  },
  { timestamps: true }
)

// Hash password before saving
UserSchema.pre('save', async function (this: any, next: any) {
  if (!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Compare entered password with hashed password
UserSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Remove password from JSON output
UserSchema.methods.toJSON = function () {
  const user = this.toObject()
  delete user.password
  return user
}

export default mongoose.model<IUser>('User', UserSchema)
