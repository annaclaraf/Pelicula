import { moviesToWatchApi, moviesWatchedApi } from '../services/api'

export async function AllMoviesToWatch(user) {
  const response = await moviesToWatchApi.get(`/movies/watch/${user.id}`).then(res => res.data)

  const movies = []
  response.map(async (item) => {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${item.movieId}?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR`, { method: "GET" })
      .then(res => res.json())

    movies.push(movie)
  })

  return movies
}

export async function AllMoviesWatched(user){
  const response = await moviesWatchedApi.get(`/movies/watched/${user.id}`).then(res => res.data)

  const movies = []
  response.map(async (item) => {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${item.movieId}?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR`, { method: "GET" })
      .then(res => res.json())

    movies.push(movie)
  })

  return movies;
}