import { z } from "zod"

const resMovieSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().optional(),
  duration: z.number().positive(),
  price: z.number().int().min(0),
})

const reqMovieSchema = resMovieSchema.omit({ id: true })

const listMoviesSchema = z.array(resMovieSchema)

const updateMovieSchema = reqMovieSchema.partial()

export { resMovieSchema, reqMovieSchema, listMoviesSchema, updateMovieSchema }
