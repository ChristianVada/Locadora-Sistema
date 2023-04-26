import { IListMoves } from "../interfaces/movies.interfaces"
import { Repository } from "typeorm"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"

const readMoviesService = async (): Promise<IListMoves> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movies = await movieRepository.find()

  return movies
}

export { readMoviesService }
