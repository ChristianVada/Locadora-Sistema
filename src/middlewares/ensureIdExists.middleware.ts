import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

const ensureIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieId: number = Number(req.params.id)

  const movieSearch: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movie: Movie | null = await movieSearch.findOne({
    where: {
      id: movieId,
    },
  })

  if (!movie) {
    throw new AppError("Movie not found", 404)
  }

  return next()
}

export { ensureIdExists }
