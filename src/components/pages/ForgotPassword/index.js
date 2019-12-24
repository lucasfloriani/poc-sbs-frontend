import React from 'react'
import Container from '@atoms/Container'
import FullPageTemplate from '@templates/FullPageTemplate'
import ForgotPasswordForm from '@organisms/ForgotPasswordForm'

const ForgotPassword = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <ForgotPasswordForm />
    </Container>
  </FullPageTemplate>
)

export default ForgotPassword
