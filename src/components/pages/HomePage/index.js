import React from 'react'
import { Container, FullPageTemplate, LoginForm } from 'components'

const HomePage = () => (
  <FullPageTemplate style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}>
    <Container align="center" windowHeight>
      <LoginForm />
    </Container>
  </FullPageTemplate>
)

export default HomePage
