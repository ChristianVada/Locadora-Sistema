import { z } from "zod"

const resMovieSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  duration: z.number(),
  price: z.number(),
})

const reqMovieSchema = resMovieSchema.omit({ id: true })

const listMoviesSchema = z.array(resMovieSchema)

export { resMovieSchema, reqMovieSchema, listMoviesSchema }
