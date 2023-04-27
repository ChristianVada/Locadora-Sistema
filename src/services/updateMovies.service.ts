import { Repository } from "typeorm"
import { IResponseMovie, IUpdateMovie } from "../interfaces/movies.interfaces"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"

const updateMovieService = async (
  movieData: IUpdateMovie,
  movieId: number
): Promise<IResponseMovie> => {
  const movieRepositor: Repository<IResponseMovie> =
    AppDataSource.getRepository(Movie)

  const oldMovieData: IResponseMovie | null = await movieRepositor.findOneBy({
    id: movieId,
  })

  const newMovieData: IResponseMovie = movieRepositor.create({
    ...oldMovieData,
    ...movieData,
  })

  const movie: IResponseMovie = await movieRepositor.save(newMovieData)

  return movie
}

export { updateMovieService }
