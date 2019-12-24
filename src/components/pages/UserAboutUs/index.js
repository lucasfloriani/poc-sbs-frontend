import React from 'react'
import Container from '@atoms/Container'
import AboutUs from '@organisms/AboutUs'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const UserAboutUs = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)


export default UserAboutUs
