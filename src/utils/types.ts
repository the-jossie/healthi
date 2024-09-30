export type Doctor = {
  id: string
  name: string
  image: string
  title: string
  yearsOfExperience: number
  minPrice: number
  specialization: string
  availability: {
    days: string[]
    startTime: string
    endTime: string
  }
}
