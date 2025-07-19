function verDetalles(id) {
  const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      portada: "img/portada1.jpg"
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      portada: "img/portada2.jpg"
    },
    {
      id: 3,
      titulo: "Moby Dick",
      autor: "Herman Melville",
      portada: "img/portada3.jpg"
    }
  ];

  const libro = libros.find(l => l.id === id);
  if (libro) {
    localStorage.setItem('libroSeleccionado', JSON.stringify(libro));
    window.location.href = 'detalles.html';
  }
}

// Cargar detalles en detalles.html
if (window.location.pathname.endsWith('detalles.html')) {
  window.onload = function() {
    const libro = JSON.parse(localStorage.getItem('libroSeleccionado'));
    if (libro) {
      document.getElementById('titulo').textContent = libro.titulo;
      document.getElementById('autor').textContent = "Autor: " + libro.autor;
      document.getElementById('portada').src = libro.portada;
    }
  };
}