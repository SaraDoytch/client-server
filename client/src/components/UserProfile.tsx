
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router";
import {
  useDeletedriverMutation,
  useGetDriverSuggestionsQuery,
  useGetPassengerSuggestionsQuery,
} from "../stores/Slices/endPointsDriver";
import { Driver } from "../interfaces/Interface";

const UserProfile = () => {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");
  const parsedUser = currentUser ? JSON.parse(currentUser) : null;

  const {
    data: myRides,
    isLoading: isLoadingDriver,
    isError: isErrorDriver,
    error: errorDriver,
  } = useGetDriverSuggestionsQuery(parsedUser?._id, {
    skip: !parsedUser,
  });

  const {
    data: joinedRides,
    isLoading: isLoadingPassenger,
    isError: isErrorPassenger,
    error: errorPassenger,
  } = useGetPassengerSuggestionsQuery(parsedUser?._id, {
    skip: !parsedUser,
  });

  console.log("joinedRides", joinedRides);
  const [deleteDriver] = useDeletedriverMutation();

  if (!parsedUser) {
    return <Typography variant="h6">אין משתמש מחובר.</Typography>;
  }

  if (isLoadingDriver || isLoadingPassenger) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
        <CircularProgress />
        <Typography ml={2}>טוען נתונים...</Typography>
      </Box>
    );
  }

  if (isErrorDriver || isErrorPassenger) {
    return (
      <Alert severity="error">
        שגיאה בטעינת הנסיעות:
        {JSON.stringify(errorDriver || errorPassenger)}
      </Alert>
    );
  }

  const handleEdit = (rideId: string) => {
    navigate(`/edit-ride/${rideId}`);
  };

  const handleDelete = async (ride: Driver) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק את הנסיעה?")) {
      try {
        await deleteDriver(ride);
        // TODO: שליחת מייל לנוסעים אם יש צורך
      } catch (err) {
        console.error("שגיאה במחיקה:", err);
      }
    }
  };

  const renderRideCard = (ride: Driver, showActions = false) => (
    <Grid item xs={12} md={6} key={ride._id}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6">
            {ride.source} → {ride.destination}
          </Typography>
          <Typography variant="body2">
            תאריך: {new Date(ride.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2">שעה: {ride.time}</Typography>
          <Typography variant="body2">כתובת איסוף: {ride.address}</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">מקומות פנויים: {ride.availableSeats}</Typography>
          <Typography variant="body2" color="text.secondary">

            {typeof ride.driver === "object" && ride.driver?.userName
              ? `שם נהג: ${ride.driver.userName}`
              : "שם נהג לא ידוע"}

          </Typography>

        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        פרופיל משתמש
      </Typography>

      <Box mt={4}>
        <Typography variant="h5">🛣️ נסיעות שיצרתי</Typography>
        <Grid container spacing={2} mt={1}>
          {myRides?.length ? (
            myRides.map((ride) => renderRideCard(ride, true))
          ) : (
            <Typography variant="body1" sx={{ ml: 2 }}>
              לא יצרת נסיעות.
            </Typography>
          )}
        </Grid>
      </Box>


    </Box>
  );
};

export default UserProfile;
