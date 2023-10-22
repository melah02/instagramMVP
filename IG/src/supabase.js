import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qncrlkxlhrvyxxrjdrpx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuY3Jsa3hsaHJ2eXh4cmpkcnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1NTIyMzEsImV4cCI6MjAxMjEyODIzMX0.KX_DIUnCrfG5c9stGA_59H5wIA4Rw8XwWelTFkHWOw0';
export const supabase = createClient(supabaseUrl, supabaseKey);

