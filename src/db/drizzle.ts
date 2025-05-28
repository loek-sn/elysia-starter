import { drizzle } from 'drizzle-orm/bun-sql';
// import * as schema from './schema';
import * as authSchema from "./auth.schema"

export const db = drizzle(Bun.env.DATABASE_URL!, {
    schema: {
        // ...schema,
        ...authSchema
    }
})