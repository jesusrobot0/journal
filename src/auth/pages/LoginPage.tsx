import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";

export function LoginPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "primary.main",
      }}
    >
      <Grid
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
          boxShadow: "0 5px 5px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField label="Email" type="email" fullWidth />
            </Grid>
            <Grid size={12}>
              <TextField label="Password" type="password" fullWidth />
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
              }}
              size={12}
            >
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" size={12} justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                ¿No tienes una cuenta? ¡Crea una!
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
