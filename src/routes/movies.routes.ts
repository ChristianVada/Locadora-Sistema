import { Router } from "express"
import {
  createMoviesController,
  readMoviesController,
  updateMoviesController,
} from "../controllers/movies.controllers"
import { ensureBodyisValidMiddleware } from "../middlewares/ensureBodyIsValid.middleware"
import { reqMovieSchema, updateMovieSchema } from "../schemas/movies.schemas"
import { ensureNameNotExists } from "../middlewares/ensureNameNotExists.middleware"
import { ensureIdExists } from "../middlewares/ensureIdExists.middleware"

const movieRoutes: Router = Router()

movieRoutes.post(
  "",
  ensureBodyisValidMiddleware(reqMovieSchema),
  ensureNameNotExists,
  createMoviesController
)

movieRoutes.get("", readMoviesController)

movieRoutes.patch(
  "/:id",
  ensureBodyisValidMiddleware(updateMovieSchema),
  ensureIdExists,
  ensureNameNotExists,
  updateMoviesController
)

movieRoutes.delete("/:id")

export { movieRoutes }
