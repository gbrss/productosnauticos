export interface SubcategoriaEscudo {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string; // /public/images/escudos/...
  count: number;
}

export const subcategoriasEscudos: SubcategoriaEscudo[] = [
  {
    slug: "escudos-de-bronce-m",
    nombre: "Escudos de Bronce M",
    descripcion: "Bronce fundido, base madera y caja",
    imagen: "/images/escudos/bronce-m.jpg",
    count: 4
  },
  {
    slug: "escudos-de-bronce",
    nombre: "Escudos de Bronce",
    descripcion: "Bronce fundido, base madera y caja",
    imagen: "/images/escudos/bronce.jpg",
    count: 2
  },
  {
    slug: "escudo-nacional",
    nombre: "Escudo Nacional",
    descripcion: "Galvanos de bronce, resina y aluminio",
    imagen: "/images/escudos/nacional.jpg",
    count: 4
  },
  {
    slug: "escudos-portalon",
    nombre: "Escudos de Portalón",
    descripcion: "Compañía de Reserva Naval Yates",
    imagen: "/images/escudos/mini.jpg",
    count: 1
  }
];

// Luego mapeas tus productos existentes por subcategoria
export const productosPorSubcategoria = {
  "escudos-de-resina": ["E-201-B", "E-200-A", "E-200-B", "E-200-B1"],
  "escudos-de-bronce": ["E-500", "E-500-blason"],
  "escudo-nacional": ["B-462", "B-462-A", "B-462-B", "B-462-C"],
  "escudos-mini": ["E-133-A1"]
}
