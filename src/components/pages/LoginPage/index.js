import React from 'react'
import { Container, FullPageTemplate, LoginForm } from 'components'

const LoginPage = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <LoginForm />
    </Container>
  </FullPageTemplate>
)

export default LoginPage
