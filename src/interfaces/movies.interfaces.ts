import { z } from "zod"
import {
  listMoviesSchema,
  reqMovieSchema,
  resMovieSchema,
} from "../schemas/movies.schemas"

type IResponseMovie = z.infer<typeof resMovieSchema>

type IRequestMovie = z.infer<typeof reqMovieSchema>

type IListMoves = z.infer<typeof listMoviesSchema>

export { IResponseMovie, IRequestMovie, IListMoves }
