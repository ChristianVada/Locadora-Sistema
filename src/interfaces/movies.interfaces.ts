import { z } from "zod"
import {
  listMoviesSchema,
  reqMovieSchema,
  resMovieSchema,
  updateMovieSchema,
} from "../schemas/movies.schemas"
import { DeepPartial } from "typeorm"

type IResponseMovie = z.infer<typeof resMovieSchema>

type IRequestMovie = z.infer<typeof reqMovieSchema>

type IListMoves = z.infer<typeof listMoviesSchema>

type IUpdateMovie = DeepPartial<IRequestMovie>

export { IResponseMovie, IRequestMovie, IListMoves, IUpdateMovie }
