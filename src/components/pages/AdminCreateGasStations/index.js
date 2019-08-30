import React from 'react'
import {
  AdminFooter,
  AdminMenu,
  Container,
  CreateGasStationForm,
  FullPageTemplate,
} from 'components'

const AdminCreateGasStations = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <CreateGasStationForm />
    </Container>
  </FullPageTemplate>
)

export default AdminCreateGasStations
