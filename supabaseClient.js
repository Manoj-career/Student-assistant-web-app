import { createClient } from '@supabase/supabase-js'

// Your credentials
const supabaseUrl = 'https://xylvnvayvwcsxhiazfvn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bHZudmF5dndjc3hoaWF6ZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTAzMTgsImV4cCI6MjA3MDU4NjMxOH0._jICgcmUhEMo9ADY5WYX6U3BUo5a0r0544sb_cq0Ntk'

// Create the client
export const supabase = createClient(supabaseUrl, supabaseKey)
