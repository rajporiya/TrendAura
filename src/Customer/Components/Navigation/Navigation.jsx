import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  ShoppingCart as CartIcon,
  PersonOutline as UserIcon,
  FavoriteBorder as WishlistIcon,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = ["Electronics", "Fashion", "Home & Garden", "Sports", "Offers"];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar 
      position="sticky" 
      sx={{ bgcolor: "white", color: "black", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between py-2 px-0">
          
          {/* MOBILE ONLY: 3-Bar Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }} // Only visible on mobile
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Typography
            variant="h5"
            className="font-black tracking-tighter text-indigo-700 cursor-pointer"
            sx={{ flexGrow: { xs: 1, md: 0 } }}
          >
            Trend<span className="text-black">Aura</span>
          </Typography>

          {/* DESKTOP ONLY: Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }} className="space-x-8 ml-10">
            {categories.map((cat) => (
              <Typography
                key={cat}
                className="text-sm font-bold text-gray-600 hover:text-indigo-600 cursor-pointer transition-all duration-200"
              >
                {cat}
              </Typography>
            ))}
          </Box>

          {/* SEARCH BAR - Hidden on small mobile */}
          <Box className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-full ml-auto mr-6 w-full max-w-xs">
            <SearchIcon className="text-gray-400 text-sm" />
            <InputBase
              placeholder="Search products..."
              className="ml-2 w-full text-sm"
            />
          </Box>

          {/* ACTION ICONS */}
          <Box className="flex items-center space-x-1 sm:space-x-4">
            <IconButton className="text-gray-700 hidden sm:flex">
              <UserIcon />
            </IconButton>
            <IconButton className="text-gray-700 hidden sm:flex">
              <WishlistIcon />
            </IconButton>
            <IconButton className="text-gray-700">
              <Badge badgeContent={2} color="primary">
                <CartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: "280px" } }}
      >
        <Box className="p-6 h-full flex flex-col">
          <Typography variant="h6" className="font-bold mb-6 text-indigo-700">Menu</Typography>
          <List>
            {categories.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleDrawerToggle} className="rounded-lg mb-1">
                  <ListItemText primary={text} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          <Box className="mt-auto border-t pt-4">
            <ListItemButton className="rounded-lg">
              <UserIcon className="mr-3 text-gray-500" />
              <ListItemText primary="Account" />
            </ListItemButton>
            <ListItemButton className="rounded-lg">
              <WishlistIcon className="mr-3 text-gray-500" />
              <ListItemText primary="Wishlist" />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navigation;