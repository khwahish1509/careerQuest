export interface Consultant {
  id: string;
  name: string;
  expertise: string;
  imageUrl: string;
  hourlyRate: number;
  availability: string[];
}

export interface Appointment {
  id: string;
  consultantId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  meetLink?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}