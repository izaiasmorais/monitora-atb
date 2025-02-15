import { z } from "zod";

import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
