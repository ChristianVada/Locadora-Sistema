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

interface IMoviesPagination {
  prevPage: string | null
  nextPage: string | null
  count: number
  data: IListMoves
}

export {
  IResponseMovie,
  IRequestMovie,
  IListMoves,
  IUpdateMovie,
  IMoviesPagination,
}
