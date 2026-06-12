import jwt from 'jsonwebtoken'

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  })
}

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export const calculateDaysLeft = (deadline: Date): number => {
  const now = new Date()
  const diff = new Date(deadline).getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}