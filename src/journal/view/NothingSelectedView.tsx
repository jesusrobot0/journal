import { StarOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export function NothingSelectedView() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 64px)",
        padding: 4,
        backgroundColor: "primary.main",
      }}
    >
      <Grid>
        <StarOutline sx={{ fontSize: 130, color: "white" }} />
      </Grid>
      <Grid>
        <Typography color="white" variant="h4">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
}
