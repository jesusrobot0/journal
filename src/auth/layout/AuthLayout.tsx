import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  title?: string;
}

export function AuthLayout({ children, title = "" }: Props) {
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
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
}
