import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { IResponseMovie } from "../interfaces/movies.interfaces"

const deleteMovieService = async (
  movieId: number
): Promise<IResponseMovie | void> => {
  const movieRepositor: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movieData: Movie | null = await movieRepositor.findOneBy({
    id: movieId,
  })

  const deleteMovieData: IResponseMovie = await movieRepositor.remove(
    movieData!
  )

  return deleteMovieData
}

export { deleteMovieService }
