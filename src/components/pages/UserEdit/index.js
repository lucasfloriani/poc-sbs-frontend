import React from 'react'
import {
  Container,
  FullPageTemplate,
  UpdateUserForm,
  UserFooter,
  UserMenu,
} from 'components'

const UserEdit = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <UpdateUserForm />
    </Container>
  </FullPageTemplate>
)


export default UserEdit
