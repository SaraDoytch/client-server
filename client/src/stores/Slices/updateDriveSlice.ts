import ApiSlice from "./ApiSlice";

const updateDriveSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateDrive: builder.mutation({
            query: (drive) => ({
                url: `/drives/${drive._id}`,
                method: "PUT",
                body: drive
            }),
            invalidatesTags: ["Driver"]
        }),
    })
})
export const {useUpdateDriveMutation } = updateDriveSlice;
export default updateDriveSlice;