import { moviesToWatchApi, moviesWatchedApi } from '../services/api'

export async function AllMoviesToWatch(user) {
  const movies = await moviesToWatchApi.get(`/movies/watch/${user.id}`)
    .then(res => res.data)
    .then(res => res.sort((a, b) => a.registerDate - b.registerDate));

  return movies;
}

export async function AllMoviesWatched(user){
  const movies = await moviesWatchedApi.get(`/movies/watched/${user.id}`)
    .then(res => res.data)
    .then(res => res.sort((a, b) => a.registerDate - b.registerDate));

  return movies;
}