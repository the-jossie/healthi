import doctorImage from '@/assets/avatar1.svg'
import type { Doctor } from "@/utils/types";

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Amanda Clara',
    image: doctorImage,
    title: 'specialist',
    yearsOfExperience: 12,
    minPrice: 25,
    specialization: 'Padiatric',
    availability: {
      days: ['Tue', 'Thu'],
      startTime: '10:00 AM',
      endTime: '01:00 PM'
    }
  },
  {
    id: '2',
    name: 'Jason shatsky',
    image: doctorImage,
    title: 'specialist',
    yearsOfExperience: 10,
    minPrice: 35,
    specialization: 'Surgical ',
    availability: {
      days: ['Tue', 'Thu'],
      startTime: '10:00 AM',
      endTime: '01:00 PM'
    }
  },
  {
    id: '2',
    name: 'Jason shatsky',
    image: doctorImage,
    title: 'specialist',
    yearsOfExperience: 10,
    minPrice: 35,
    specialization: 'Gastroentrology ',
    availability: {
      days: ['Tue', 'Thu'],
      startTime: '10:00 AM',
      endTime: '01:00 PM'
    }
  }
]
