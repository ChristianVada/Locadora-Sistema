import express, { Application } from "express"
import "express-async-errors"
import { handleErros } from "./error"
import { movieRoutes } from "./routes/movies.routes"

const app: Application = express()
app.use(express.json())

app.use("/movies", movieRoutes)

app.use(handleErros)

export default app
