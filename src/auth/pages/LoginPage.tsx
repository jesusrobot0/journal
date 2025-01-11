import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export function LoginPage() {
  return (
    <AuthLayout title="Login">
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
    </AuthLayout>
  );
}
