import moduleName from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
        <form>
          <Grid container>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Nombre' type='text'      placeholder='John Doe' fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Correo' type='email'      placeholder='correo@google.com' fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Contraseña' type='password'      placeholder='Contraseña' fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
              
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>x|
            </Grid>

            {/* <Grid container spacing={2} sx={{mb: 2}}>
              <Grid item>
                <Button>
                  Login
                </Button>
              </Grid>
            </Grid> */}

          </Grid>
        </form>
    </AuthLayout>
  )
}
