import { Request, Response } from "express"

import {
  IListMoves,
  IRequestMovie,
  IResponseMovie,
} from "../interfaces/movies.interfaces"
import { createMovieService } from "../services/createMovie.service"
import { readMoviesService } from "../services/readMovies.service"

const createMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: IRequestMovie = req.body
  const newMovie = await createMovieService(movieData)

  return res.status(201).json(newMovie)
}

const readMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movies: IListMoves = await readMoviesService()

  return res.status(200).json(movies)
}

export { createMoviesController, readMoviesController }
