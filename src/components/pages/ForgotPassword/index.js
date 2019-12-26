import React from 'react'
import Container from '@atoms/Container'
import FullPageTemplate from '@templates/FullPageTemplate'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import ForgotPasswordForm from '@organisms/ForgotPasswordForm'

const ForgotPassword = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <ForgotPasswordForm />
    </Container>
  </FullPageTemplate>
)

export default ForgotPassword
