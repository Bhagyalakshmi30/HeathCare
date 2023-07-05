export interface Doctor{
    photos?: any;
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    role: string;
   
    qualification?: string;
    specialization?: string;
    yearsOfExperience?: number;
    appointment?: any | null;
}