import Box from "@mui/material/Box";
import { Navbar, Sidebar } from "../components";
import { Toolbar } from "@mui/material";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const DRAWER_WIDTH: number = 340;

export function JournalLayout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={DRAWER_WIDTH} />
      <Sidebar drawerWidth={DRAWER_WIDTH} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  );
}
