import React from 'react'
import {
  AdminFooter,
  AdminMenu,
  Block,
  Container,
  FullPageTemplate,
  Grid,
  Heading,
  ListComplaints,
} from 'components'

const AdminComplaints = () => (
  <FullPageTemplate header={<AdminMenu />} footer={<AdminFooter />}>
    <Container align="center">
      <Grid>
        <Block>
          <Heading
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Denúncias dos usuários
          </Heading>
        </Block>
        <ListComplaints />
      </Grid>
    </Container>
  </FullPageTemplate>
)

export default AdminComplaints
