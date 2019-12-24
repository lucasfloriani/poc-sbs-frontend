import React from 'react'
import Container from '@atoms/Container'
import UpdateUserForm from '@molecules/UpdateUserForm'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const UserEdit = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <UpdateUserForm />
    </Container>
  </FullPageTemplate>
)


export default UserEdit
