import React from 'react'
import { Container, FullPageTemplate, UserRegisterForm } from 'components'

const RegisterUserPage = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <UserRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterUserPage
