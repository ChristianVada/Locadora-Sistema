import { IListMoves, IMoviesPagination } from "../interfaces/movies.interfaces"
import { Repository } from "typeorm"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"

const readMoviesService = async (
  page: number,
  perPage: number
): Promise<IMoviesPagination> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const allMovies = await movieRepository.find()

  let movies: Movie[] | undefined

  if (!perPage || perPage > 5 || perPage < 1) {
    perPage = 5
  }

  if (!page || page <= 0) {
    movies = await movieRepository.find({
      take: perPage,
    })
  } else {
    movies = await movieRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      /* order: {
        price: "asc",
        description: "asc"
      } */
    })
  }

  let prevPage: number | string | null = page - 1

  if (prevPage <= 0 || !page) {
    prevPage = null
  } else {
    prevPage = `http://localhost:3000/movies?page=${
      page - 1
    }&perPage=${perPage}`
  }

  let nextPage: number | string | null = page + 1

  if (movies.length < perPage || page * perPage >= allMovies.length) {
    nextPage = null
  } else if (nextPage < 2 || !page) {
    nextPage = `http://localhost:3000/movies?page=${2}&perPage=${perPage}`
  } else {
    nextPage = `http://localhost:3000/movies?page=${
      page + 1
    }&perPage=${perPage}`
  }

  return {
    prevPage: prevPage,
    nextPage: nextPage,
    count: allMovies.length,
    data: movies,
  }
}

export { readMoviesService }
