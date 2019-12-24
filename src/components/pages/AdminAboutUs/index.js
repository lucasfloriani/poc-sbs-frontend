import React from 'react'
import Container from '@atoms/Container'
import AboutUs from '@organisms/AboutUs'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminAboutUs = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)

export default AdminAboutUs
