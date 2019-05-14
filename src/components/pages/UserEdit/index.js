import React from 'react'
import {
  Container,
  FullPageTemplate,
  UpdateUserForm,
  UserFooter,
  UserMenu,
} from 'components'

const UserEdit = () => (
  <FullPageTemplate
    header={<UserMenu />}
    footer={<UserFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
    <Container align="center">
      <UpdateUserForm />
    </Container>
  </FullPageTemplate>
)


export default UserEdit
