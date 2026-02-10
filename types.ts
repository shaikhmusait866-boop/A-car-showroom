
export type Brand = 'Honda' | 'Kia';

export interface CarVariant {
  name: string;
  price: number;
  engine: string;
  features: string[];
}

export interface CarColor {
  name: string;
  hex: string;
}

export interface CarSpecs {
  engine: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  power: string;
  torque: string;
}

export interface Car {
  id: string;
  name: string;
  brand: Brand;
  basePrice: number;
  image: string;
  description: string;
  specs: CarSpecs;
  variants: CarVariant[];
  colors: CarColor[];
  features: string[];
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'EV' | 'MPV';
}

export interface BookingDetails {
  carId: string;
  variant: string;
  color: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

export type AuthMode = 'login' | 'signup';
