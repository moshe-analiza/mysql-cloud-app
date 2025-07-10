import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv';
config();
// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.DB_URL, process.env.DB_SECRET);
export default supabase;
export { supabase };