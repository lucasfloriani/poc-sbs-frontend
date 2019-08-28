import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import {
  AdminFooter,
  AdminMenu,
  Button,
  Container,
  FullPageTemplate,
  Grid,
} from 'components'

const AdminRelatories = ({ complaintRelatoryRequest }) => {
  return (
    <FullPageTemplate
      header={<AdminMenu />}
      footer={<AdminFooter />}
      style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}
    >
      <Container align="center">
        <Grid>
          <Button onClick={() => complaintRelatoryRequest()}>Baixar denúncias</Button>
        </Grid>
      </Container>
    </FullPageTemplate>
  )
}

AdminRelatories.propTypes = {
  complaintRelatoryRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(null, mapDispatchToProps)(AdminRelatories)
