import React from 'react'
import Container from '@atoms/Container'
import LoginForm from '@organisms/LoginForm'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const LoginPage = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <LoginForm />
    </Container>
  </FullPageTemplate>
)

export default LoginPage
