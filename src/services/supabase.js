import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://azylgbmvlpxmuiszkrtf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6eWxnYm12bHB4bXVpc3prcnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDYwOTcsImV4cCI6MjAzNjAyMjA5N30.hpwpGi_e9ElfbCIxi2EAJ3fHOCRzeZldSDl8CN85xZo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;