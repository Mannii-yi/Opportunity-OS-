import mongoose, { Schema, type Document } from 'mongoose'

export interface IOpportunity extends Document {
  title: string
  description: string
  requiredSkills: string[]
  isActive?: boolean
}

const OpportunitySchema = new Schema<IOpportunity>(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    requiredSkills: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Opportunity =
  mongoose.models.Opportunity || mongoose.model<IOpportunity>('Opportunity', OpportunitySchema)

export default Opportunity
