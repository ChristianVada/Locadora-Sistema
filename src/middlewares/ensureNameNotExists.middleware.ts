import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

const ensureNameNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieName = req.body.name

  const movieSearch: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movie: Movie | null = await movieSearch.findOne({
    where: {
      name: movieName,
    },
  })

  if (movie) {
    throw new AppError("Movie already exists", 409)
  }

  return next()
}

export { ensureNameNotExists }
