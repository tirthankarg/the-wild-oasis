import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycWJuZ3J1YWtnc2ZqZGJza3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3NTc0MzEsImV4cCI6MjEwNDMzMzQzMX0.5xgbud-GzlBJexo_83KsRpoukqZYFcJtfAwIHvQffa8";
const supabase = createClient("https://vrqbngruakgsfjdbskrn.supabase.co", key);

export default supabase;
