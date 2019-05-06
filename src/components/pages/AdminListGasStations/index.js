import React from 'react'
import {
  AdminFooter,
  AdminMenu,
  Container,
  FullPageTemplate,
  FilterGasStation,
  Grid,
  ListGasStations,
} from 'components'

const AdminListGasStations = () => (
  <FullPageTemplate
    header={<AdminMenu />}
    footer={<AdminFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <Grid>
        <FilterGasStation />
        <ListGasStations actions={['edit']} />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default AdminListGasStations
