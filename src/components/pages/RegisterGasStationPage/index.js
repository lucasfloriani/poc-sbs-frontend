import React from 'react'
import Container from '@atoms/Container'
import GasStationRegisterForm from '@organisms/GasStationRegisterForm'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const RegisterGasStationPage = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <GasStationRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterGasStationPage
