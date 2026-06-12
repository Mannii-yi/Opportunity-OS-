import mongoose, { Document, Schema } from 'mongoose'

export interface IRoadmapStep {
  title: string
  description: string
  type: 'skill' | 'project' | 'apply' | 'achievement'
  deadline?: string
  completed: boolean
  unlocks?: string
}

export interface IRoadmap extends Document {
  user: mongoose.Types.ObjectId
  goal: string
  steps: IRoadmapStep[]
  generatedAt: Date
  updatedAt: Date
}

const RoadmapStepSchema = new Schema<IRoadmapStep>({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['skill', 'project', 'apply', 'achievement'], 
    required: true 
  },
  deadline: { 
    type: String 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  unlocks: { 
    type: String 
  },
})

const RoadmapSchema = new Schema<IRoadmap>(
  {
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    goal: { 
      type: String, 
      required: true 
    },
    steps: [RoadmapStepSchema],
    generatedAt: { 
      type: Date, 
      default: Date.now 
    },
  },
  { timestamps: true }
)

export default mongoose.model<IRoadmap>('Roadmap', RoadmapSchema)