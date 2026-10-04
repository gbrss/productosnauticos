export interface SubcategoriaEscudo {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string; // /public/images/escudos/...
  count: number;
}

export const subcategoriasEscudos: SubcategoriaEscudo[] = [
  
  {
    slug: "escudo-nacional",
    nombre: "Escudo Nacional",
    descripcion: "Galvanos de bronce, resina y aluminio",
    imagen: "https://i0.wp.com/nautigift.cl/wp-content/uploads/2021/06/B-462-A.jpg?fit=300%2C300&ssl=1",
    count: 1
  },
  {
    slug: "escudos-de-bronce",
    nombre: "Escudos de Bronce",
    descripcion: "Bronce fundido, base madera y caja",
    imagen: "https://i0.wp.com/nautigift.cl/wp-content/uploads/2021/06/E-112-J-2-rotated.jpg?fit=300%2C300&ssl=1",
    count: 2
  },
  {
    slug: "escudos-de-bronce-m",
    nombre: "Escudos de Bronce M",
    descripcion: "Bronce fundido, base madera y caja",
    imagen: "https://i0.wp.com/nautigift.cl/wp-content/uploads/2021/06/E-112-F-rotated.jpg?fit=300%2C300&ssl=1",
    count: 3
  },
  
  {
    slug: "escudos-portalon",
    nombre: "Escudos de Portalón",
    descripcion: "Compañía de Reserva Naval Yates",
    imagen: "/images/escudos/mini.jpg",
    count: 4
  }
];

// Luego mapeas tus productos existentes por subcategoria
export const productosPorSubcategoria = {
  "escudos-de-resina": ["E-201-B", "E-200-A", "E-200-B", "E-200-B1"],
  "escudos-de-bronce": ["E-500", "E-500-blason"],
  "escudo-nacional": ["B-462", "B-462-A", "B-462-B", "B-462-C"],
  "escudos-mini": ["E-133-A1"]
}
