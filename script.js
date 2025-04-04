// script.js
const popularMovies = [
    { title: 'Movie 1', imageUrl: 'path/to/movie1.jpg' },
    { title: 'Movie 2', imageUrl: 'path/to/movie2.jpg' },
    // Add more movies as needed
  ];
  
  const topRatedMovies = [
    { title: 'Top Movie 1', imageUrl: 'path/to/topmovie1.jpg' },
    { title: 'Top Movie 2', imageUrl: 'path/to/topmovie2.jpg' },
    // Add more movies as needed
  ];
  
  function loadThumbnails() {
    const popularContainer = document.getElementById('popularThumbnails');
    const topRatedContainer = document.getElementById('topRatedThumbnails');
  
    popularMovies.forEach(movie => {
      const div = document.createElement('div');
      div.classList.add('thumbnail');
      div.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.title}"><p>${movie.title}</p>`;
      popularContainer.appendChild(div);
    });
  
    topRatedMovies.forEach(movie => {
      const div = document.createElement('div');
      div.classList.add('thumbnail');
      div.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.title}"><p>${movie.title}</p>`;
      topRatedContainer.appendChild(div);
    });
  }
  
  function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const allMovies = [...popularMovies, ...topRatedMovies];
    const filteredMovies = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
  
    // Clear existing thumbnails
    document.getElementById('popularThumbnails').innerHTML = '';
    document.getElementById('topRatedThumbnails').innerHTML = '';
  
    // Display filtered movies
    filteredMovies.forEach(movie => {
      const div = document.createElement('div');
      div.classList.add('thumbnail');
      div.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.title}"><p>${movie.title}</p>`;
      document.getElementById('popularThumbnails').appendChild(div);
    });
  }
  
  // Load thumbnails on page load
  window.onload = loadThumbnails;
  