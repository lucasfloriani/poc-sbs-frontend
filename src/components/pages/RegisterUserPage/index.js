import React from 'react'
import Container from '@atoms/Container'
import FullPageTemplate from '@templates/FullPageTemplate'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import UserRegisterForm from '@organisms/UserRegisterForm'

const RegisterUserPage = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <UserRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterUserPage
