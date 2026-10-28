import alerta from './alerta';

// Lista única de habitaciones: la usan la sección Habitaciones y la reserva
const habitaciones = [
  {
    id: 1,
    nombre: 'Habitación Simple',
    descripcion: '1 cama single',
    detalle: 'Ideal para viajes de trabajo o escapadas solo. Escritorio, TV y baño privado.',
    precio: 50,
    imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 2,
    nombre: 'Habitación Doble',
    descripcion: '1 cama matrimonial',
    detalle: 'Cómoda y luminosa, pensada para parejas. Aire acondicionado y minibar.',
    precio: 80,
    imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  },
  {
    id: 3,
    nombre: 'Habitación Familiar',
    descripcion: '1 matrimonial + 2 single',
    detalle: 'Espacio amplio para toda la familia, con living y dos baños.',
    precio: 120,
    imagen: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
  },
  {
    id: 4,
    nombre: 'Suite',
    descripcion: 'Vista al mar y jacuzzi',
    detalle: 'Nuestra mejor habitación: living, jacuzzi y ventanales con vista al mar.',
    precio: 200,
    imagen: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
  },
];

export function confirmarReserva(habitacion) {
  alerta(
    'Reserva confirmada',
    `Reservaste: ${habitacion.nombre} ($${habitacion.precio} por noche).`
  );
}

export default habitaciones;
