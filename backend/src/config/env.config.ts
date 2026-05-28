import * as dotenv from 'dotenv';
import * as path from 'path';

// Load variables from root backend .env file
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const envConfig = {
  port: parseInt(process.env.PORT || '4000', 10),
  supabase: {
    url: process.env.SUPABASE_URL || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  },
  ai: {
    geminiKey: process.env.GEMINI_API_KEY || '',
    groqKey: process.env.GROQ_API_KEY || '',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
};
