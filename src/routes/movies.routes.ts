import { Router } from "express"
import {
  createMoviesController,
  readMoviesController,
} from "../controllers/movies.controllers"
import { ensureBodyisValidMiddleware } from "../middlewares/ensureBodyIsValid.middleware"
import { reqMovieSchema } from "../schemas/movies.schemas"
import { ensureNameNotExists } from "../middlewares/ensureNameNotExists.middleware"

const movieRoutes: Router = Router()

movieRoutes.post(
  "",
  ensureBodyisValidMiddleware(reqMovieSchema),
  ensureNameNotExists,
  createMoviesController
)

movieRoutes.get("", readMoviesController)

movieRoutes.patch("/:id")

movieRoutes.delete("/:id")

export { movieRoutes }
