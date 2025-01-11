import { Link as RouterLink } from "react-router-dom";
import { Button, Link, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AuthLayout } from "../layout/AuthLayout";

export function RegisterPage() {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Ej. John Doe"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="johndoe@email.com"
              fullWidth
            />
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
            <Grid size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" size={12} justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/loign">
              ¿Ya tienes cuenta? !Ingresa¡
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
}
