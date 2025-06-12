// src/redux/Slices/geoApi.ts
import ApiSlice from "./ApiSlice";
import  City  from "./ApiSlice"; // אם ההגדרה שם

interface City {
  id: number;
  name: string;
}

const geoApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<City[], void>({
      query: () => "/api/geoRoutes/cities",
      providesTags: ["City"],
    }),
    getStreets: builder.query<string[], { city: string }>({
      query: ({ city }) => `/api/geoRoutes/streets?city=${encodeURIComponent(city)}`,
      providesTags: ["Street"],
    }),
  }),
});

export const { useGetCitiesQuery, useLazyGetStreetsQuery } = geoApiSlice;
