import { Repository } from "typeorm"

import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import { IRequestMovie, IResponseMovie } from "../interfaces/movies.interfaces"

const createMovieService = async (
  movieData: IRequestMovie
): Promise<IResponseMovie> => {
  const movieRepositor: Repository<IResponseMovie> =
    AppDataSource.getRepository(Movie)

  const movie: IResponseMovie = movieRepositor.create(movieData)

  await movieRepositor.save(movie)

  return movie
}

export { createMovieService }
