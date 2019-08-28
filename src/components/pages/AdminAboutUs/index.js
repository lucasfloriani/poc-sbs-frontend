import React from 'react'
import {
  AboutUs,
  AdminFooter,
  AdminMenu,
  Container,
  FullPageTemplate,
} from 'components'

const AdminAboutUs = () => (
  <FullPageTemplate
    header={<AdminMenu />}
    footer={<AdminFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default AdminAboutUs
