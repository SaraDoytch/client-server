
import { z } from 'zod';

const SuggestionSchema = z.object({

    address: z.string(),
    source: z.string(),
    destination: z.string(),
    date: z.string(),
    time: z.string(),
    availableSeats: z.string(),
    
})

export default SuggestionSchema;