import React from 'react'
import { Container, FullPageTemplate, UserRegisterForm } from 'components'

const RegisterPage = () => (
  <FullPageTemplate mainPadding="0" style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}>
    <Container align="center" windowHeight>
      <UserRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterPage
