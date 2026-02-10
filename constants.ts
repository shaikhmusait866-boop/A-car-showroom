
import { Car } from './types';

export const HONDA_CARS: Car[] = [
  {
    id: 'honda-city',
    name: 'Honda City',
    brand: 'Honda',
    basePrice: 1180000,
    image: 'https://images.unsplash.com/photo-1721532454522-f04f05dbdf69?q=80&w=1000&auto=format&fit=crop',
    description: 'The supreme sedan that redefines luxury and performance.',
    specs: {
      engine: '1.5L i-VTEC DOHC with VTC',
      mileage: '18.4 kmpl',
      transmission: '6-Speed MT / CVT',
      fuelType: 'Petrol',
      power: '121 PS @ 6600 rpm',
      torque: '145 Nm @ 4300 rpm'
    },
    variants: [
      { name: 'SV', price: 1182000, engine: '1.5L Petrol', features: ['Touchscreen', 'Dual Airbags'] },
      { name: 'V', price: 1285000, engine: '1.5L Petrol', features: ['Reverse Camera', 'Smart Entry'] },
      { name: 'VX', price: 1392000, engine: '1.5L Petrol', features: ['Sunroof', '6 Airbags'] },
      { name: 'ZX', price: 1505000, engine: '1.5L Petrol', features: ['Leather Upholstery', 'LED Headlamps'] }
    ],
    colors: [
      { name: 'Radiant Red Metallic', hex: '#8B0000' },
      { name: 'Platinum White Pearl', hex: '#F5F5F5' },
      { name: 'Golden Brown Metallic', hex: '#5D4037' },
      { name: 'Lunar Silver Metallic', hex: '#C0C0C0' },
      { name: 'Meteoroid Grey Metallic', hex: '#424242' }
    ],
    features: ['Honda Sensing ADAS', 'Electric Sunroof', '8-inch Touchscreen', 'Connected Car Tech'],
    type: 'Sedan'
  },
  {
    id: 'honda-elevate',
    name: 'Honda Elevate',
    brand: 'Honda',
    basePrice: 1160000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000&auto=format&fit=crop',
    description: 'A bold, sophisticated SUV that commands attention.',
    specs: {
      engine: '1.5L i-VTEC',
      mileage: '16.9 kmpl',
      transmission: '6-MT / 7-CVT',
      fuelType: 'Petrol',
      power: '121 PS',
      torque: '145 Nm'
    },
    variants: [
      { name: 'SV', price: 1160000, engine: '1.5L Petrol', features: ['LED DRLs', 'Touchscreen'] },
      { name: 'V', price: 1250000, engine: '1.5L Petrol', features: ['Apple CarPlay', 'Cruise Control'] }
    ],
    colors: [
      { name: 'Phoenix Orange', hex: '#FF8C00' },
      { name: 'Obsidian Blue', hex: '#00008B' }
    ],
    features: ['Bold Design', 'Honda Sensing', 'Class Leading Ground Clearance'],
    type: 'SUV'
  },
  {
    id: 'honda-amaze',
    name: 'Honda Amaze',
    brand: 'Honda',
    basePrice: 720000,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop',
    description: 'The compact sedan with a big heart.',
    specs: {
      engine: '1.2L i-VTEC',
      mileage: '18.6 kmpl',
      transmission: '5-MT / CVT',
      fuelType: 'Petrol',
      power: '90 PS',
      torque: '110 Nm'
    },
    variants: [
      { name: 'E', price: 720000, engine: '1.2L Petrol', features: ['Basic Features'] },
      { name: 'VX', price: 950000, engine: '1.2L Petrol', features: ['Auto AC', 'Alloy Wheels'] }
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Silver', hex: '#C0C0C0' }
    ],
    features: ['Spacious Cabin', 'Smooth CVT', 'Premium Interiors'],
    type: 'Sedan'
  }
];

export const KIA_CARS: Car[] = [
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    brand: 'Kia',
    basePrice: 1090000,
    image: 'https://images.unsplash.com/photo-1601051515403-d28c772c78a3?q=80&w=1000&auto=format&fit=crop',
    description: 'Badass by design, tech-savvy by nature.',
    specs: {
      engine: '1.5L CRDi VGT / 1.5L Turbo GDi',
      mileage: '17.0 kmpl',
      transmission: '6-MT / iMT / IVT / 6-AT / 7-DCT',
      fuelType: 'Petrol/Diesel',
      power: '115 PS / 160 PS',
      torque: '144 Nm / 253 Nm'
    },
    variants: [
      { name: 'HTE', price: 1090000, engine: '1.5L Petrol', features: ['Front Airbags', 'Projector Lamps'] },
      { name: 'GTX+', price: 1999000, engine: '1.5L Turbo', features: ['ADAs', 'Ventilated Seats'] },
      { name: 'X-Line', price: 2030000, engine: '1.5L Turbo', features: ['Matte Finish', 'Bose Sound'] }
    ],
    colors: [
      { name: 'Pewter Olive', hex: '#708090' },
      { name: 'Imperial Blue', hex: '#000080' },
      { name: 'Glacier White Pearl', hex: '#F0F8FF' }
    ],
    features: ['Panoramic Sunroof', 'Dual Screen Display', '360 Camera', 'Level 2 ADAS'],
    type: 'SUV'
  },
  {
    id: 'kia-ev6',
    name: 'Kia EV6',
    brand: 'Kia',
    basePrice: 6095000,
    image: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1000&auto=format&fit=crop',
    description: 'The future of electric mobility.',
    specs: {
      engine: '77.4 kWh Battery',
      mileage: '708 km range',
      transmission: 'Single Speed',
      fuelType: 'Electric',
      power: '325 PS (AWD)',
      torque: '605 Nm'
    },
    variants: [
      { name: 'GT-Line RWD', price: 6095000, engine: 'Electric', features: ['Fast Charging', 'Relaxation Seats'] },
      { name: 'GT-Line AWD', price: 6595000, engine: 'Electric', features: ['Dual Motor', 'Augmented Reality HUD'] }
    ],
    colors: [
      { name: 'Yacht Blue', hex: '#1C39BB' },
      { name: 'Moonscape', hex: '#3E3E3E' }
    ],
    features: ['V2L Support', 'Instant Acceleration', 'Sustainability Focus'],
    type: 'EV'
  },
  {
    id: 'kia-sonet',
    name: 'Kia Sonet',
    brand: 'Kia',
    basePrice: 799000,
    image: 'https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=1000&auto=format&fit=crop',
    description: 'The wild child of sub-compact SUVs.',
    specs: {
      engine: '1.2L Petrol / 1.0L Turbo',
      mileage: '18.2 kmpl',
      transmission: '5-MT / 6-iMT / 7-DCT',
      fuelType: 'Petrol/Diesel',
      power: '83 PS / 120 PS',
      torque: '115 Nm / 172 Nm'
    },
    variants: [
      { name: 'HTE', price: 799000, engine: '1.2L Petrol', features: ['Airbags'] },
      { name: 'GTX+', price: 1450000, engine: '1.0L Turbo', features: ['Bose Audio', 'Sunroof'] }
    ],
    colors: [
      { name: 'Intense Red', hex: '#FF0000' },
      { name: 'Clear White', hex: '#FFFFFF' }
    ],
    features: ['Connected Tech', 'Front Parking Sensors', 'Drive Modes'],
    type: 'SUV'
  }
];

export const ALL_CARS = [...HONDA_CARS, ...KIA_CARS];
