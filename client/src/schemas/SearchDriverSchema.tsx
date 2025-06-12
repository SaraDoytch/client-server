import { z } from 'zod';
import CitySchema from './CitySchemas';

const SearchDriverSchema = z.object({
   source: CitySchema,
   destination: CitySchema,
   date: z.date(),
   time: z.string()
 
 
 
});
export default SearchDriverSchema