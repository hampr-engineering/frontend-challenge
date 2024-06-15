import { Box, Container, Typography } from '@mui/material'
import jsonData from 'data/characters.json'
import type { Character } from 'types/characters'

import logo from 'img/Mortal-Kombat-Logo.png'
import Image from 'next/image'

// EXAMPLE: style via css modules (optional)
// import styles from 'styles/index.module.scss'

// NOTE: data
const data: Character[] = jsonData as Character[]

const Home = () => {
  return (
    <div className="root">
      <header className="header">
        <Image src={logo} height={120} className="logo" alt="logo" />
        <p>
          Edit <code>pages/index.tsx</code> and save to reload.
        </p>
      </header>
      <Box width="100%"
        // EXAMPLE: style via material-ui/mui style props/sx (optional)
        mb={10}
        bgcolor="#f5faff"
        py={10}
        >
        <Container maxWidth="lg">
          <Box mx="auto" textAlign="left" mb={{ xs: 4, md: 8 }} mt={{ xs: 8, md: 0 }}>
            <Typography variant="h5" component="h2"
              sx={{
                fontWeight: 'bold',
                color: 'red'
              }}
              >
              Hello!
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Home
