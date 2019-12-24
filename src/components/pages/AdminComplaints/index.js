import React from 'react'
import Block from '@atoms/Block'
import Container from '@atoms/Container'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import AdminFooter from '@organisms/AdminFooter'
import AdminMenu from '@organisms/AdminMenu'
import ListComplaints from '@organisms/ListComplaints'
import FullPageTemplate from '@templates/FullPageTemplate'

const AdminComplaints = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <Grid>
        <Block>
          <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
            Denúncias dos usuários
          </Heading>
        </Block>
        <ListComplaints />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default AdminComplaints
