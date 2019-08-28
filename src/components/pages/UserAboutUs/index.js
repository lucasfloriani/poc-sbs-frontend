import React from 'react'
import {
  AboutUs,
  Container,
  FullPageTemplate,
  UserFooter,
  UserMenu,
} from 'components'

const UserAboutUs = () => (
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <AboutUs />
    </Container>
  </FullPageTemplate>
)


export default UserAboutUs
