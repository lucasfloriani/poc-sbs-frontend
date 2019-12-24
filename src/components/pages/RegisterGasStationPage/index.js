import React from 'react'
import Container from '@atoms/Container'
import GasStationRegisterForm from '@organisms/GasStationRegisterForm'
import FullPageTemplate from '@templates/FullPageTemplate'

const RegisterGasStationPage = () => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <GasStationRegisterForm />
    </Container>
  </FullPageTemplate>
)

export default RegisterGasStationPage
