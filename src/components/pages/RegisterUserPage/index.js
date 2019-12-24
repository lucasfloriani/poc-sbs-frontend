import React from 'react'
import Container from '@atoms/Container'
import FullPageTemplate from '@templates/FullPageTemplate'
import UserRegisterForm from '@organisms/UserRegisterForm'

const RegisterUserPage = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <UserRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterUserPage
