import React from 'react'
import Container from '@atoms/Container'
import CreateGasStationForm from '@molecules/CreateGasStationForm'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminCreateGasStations = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <CreateGasStationForm />
    </Container>
  </FullPageTemplate>
)

export default AdminCreateGasStations
