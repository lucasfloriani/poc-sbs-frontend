import React from 'react'
import Container from '@atoms/Container'
import LoginForm from '@organisms/LoginForm'
import FullPageTemplate from '@templates/FullPageTemplate'

const LoginPage = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <LoginForm />
    </Container>
  </FullPageTemplate>
)

export default LoginPage
