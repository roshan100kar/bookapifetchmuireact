import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import '../App.css'
export default function Footer() {
  return (
    <Box 
      component="footer"
      sx={{

        background: "#E5EBF5",
        color: 'black' 
             
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{  color: 'black'}}  variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography sx={{ color: 'black'}} variant="body2" color="text.secondary">
              We are Gyani Books company, dedicated to providing the best Books Service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{  color: 'black'}}  variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{  color: 'black'}}  variant="body2" color="text.secondary">
              123 Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Typography sx={{  color: 'black'}}  variant="body2" color="text.secondary">
              Email: support@gyanibooks.com
            </Typography>
            <Typography sx={{ color: 'black'}}  variant="body2" color="text.secondary">
              Phone: +91987654321
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{  color: 'black'}}  variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography sx={{  color: 'black'}} variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="http://localhost:3000/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}