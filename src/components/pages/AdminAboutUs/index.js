import React from 'react'
import {
  AboutUs,
  AdminFooter,
  AdminMenu,
  Container,
  FullPageTemplate,
} from 'components'

const AdminAboutUs = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default AdminAboutUs
