import { NextFunction, Request, Response } from "express"

import {
  IListMoves,
  IMoviesPagination,
  IRequestMovie,
  IResponseMovie,
} from "../interfaces/movies.interfaces"
import { createMovieService } from "../services/createMovie.service"
import { readMoviesService } from "../services/readMovies.service"
import { updateMovieService } from "../services/updateMovies.service"
import { deleteMovieService } from "../services/deleteMovies.service"

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
  const page: number | undefined = Number(req.query.page)
  const perPage: number | undefined = Number(req.query.perPage)

  const sort: any = req.query.sort
  const order: any = req.query.order

  const movies: IMoviesPagination = await readMoviesService(
    page,
    perPage,
    sort,
    order
  )

  return res.status(200).json(movies)
}

const updateMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData = req.body
  const movieId = Number(req.params.id)

  const movie = await updateMovieService(movieData, movieId)

  return res.status(200).json(movie)
}

const deleteMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieId = Number(req.params.id)

  await deleteMovieService(movieId)

  return res.status(204).send()
}

export {
  createMoviesController,
  readMoviesController,
  updateMoviesController,
  deleteMoviesController,
}
