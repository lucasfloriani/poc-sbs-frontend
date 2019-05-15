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
  <FullPageTemplate
    header={<AdminMenu />}
    footer={<AdminFooter />}
    style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
  >
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
