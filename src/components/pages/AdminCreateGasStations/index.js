import React from 'react'
import {
  AdminFooter,
  AdminMenu,
  Container,
  CreateGasStationForm,
  FullPageTemplate,
} from 'components'

const AdminCreateGasStations = () => (
  <FullPageTemplate
    header={<AdminMenu />}
    footer={<AdminFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <CreateGasStationForm />
    </Container>
  </FullPageTemplate>
)

export default AdminCreateGasStations
