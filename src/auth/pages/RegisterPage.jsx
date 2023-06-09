import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (

    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Full name"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email"
              type="email"
              placeholder="example@domain.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Password"
              type="password"
              fullWidth
              autoComplete="off"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Register
              </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end" >
              <Typography sx={{ mr: 1 }}>I have account?</Typography>
              <Link component={ RouterLink } to="/auth/login">
                Login
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>

  )
}
