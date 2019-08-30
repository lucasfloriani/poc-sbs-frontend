import React from 'react'
import {
  AboutUs,
  Container,
  FullPageTemplate,
  UserFooter,
  UserMenu,
} from 'components'

const UserAboutUs = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)


export default UserAboutUs
