const SUPABASE_URL = "https://dglgcafositkaiijhgao.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbGdjYWZvc2l0a2FpaWpoZ2FvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTE4NzIzMiwiZXhwIjoyMDk2NzYzMjMyfQ.kUxqwBNJJ7reZhAQDQOcpMCJC5KZE3Y596geinQWQ9k";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
console.log("Supabase connected");