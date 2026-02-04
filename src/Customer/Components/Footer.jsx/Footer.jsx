import React from "react";
// Added 'Link' to the imports below
import { 
  Typography, Grid, Button, Box, Container, TextField, Stack, Link 
} from "@mui/material";

const Footer = () => {
  const sections = [
    { title: "Company", links: ["About", "Blog", "Press", "Jobs"] },
    { title: "Solutions", links: ["Marketing", "Analytics", "Commerce", "Insights"] },
    { title: "Legal", links: ["Claim", "Privacy", "Terms"] },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "black", color: "white", py: 8, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          
          {/* Subscription Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 3 }}>
              The latest news, articles, and resources, sent to your inbox weekly.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: "#3f51b5", 
                  px: 3, 
                  textTransform: "none",
                  "&:hover": { bgcolor: "#303f9f" } 
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4} justifyContent="flex-end">
              {sections.map((section) => (
                <Grid item xs={6} sm={4} key={section.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
                    {section.title}
                  </Typography>
                  {section.links.map((link) => (
                    <Typography key={link} variant="body2" sx={{ mb: 1 }}>
                      {/* Link is now defined! */}
                      <Link 
                        href="#" 
                        underline="none" 
                        sx={{ color: "gray", "&:hover": { color: "white" }, cursor: "pointer" }}
                      >
                        {link}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>

        <Box sx={{ borderTop: "1px solid #333", mt: 8, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="gray">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;