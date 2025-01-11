import Box from "@mui/material/Box";
import { Navbar } from "../components";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const DRAWER_WIDTH: number = 340;

export function JournalLayout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <Navbar drawerWidth={DRAWER_WIDTH} />
      {/* Sidebar */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
}
