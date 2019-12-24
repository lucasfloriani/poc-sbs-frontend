import React from 'react'
import PropTypes from 'prop-types'
import Container from '@atoms/Container'
import RecoveryPasswordForm from '@organisms/RecoveryPasswordForm'
import FullPageTemplate from '@templates/FullPageTemplate'

const RecoveryPassword = ({ match }) => (
  <FullPageTemplate mainPadding="0">
    <Container align="center" windowHeight>
      <RecoveryPasswordForm token={match.params.token} />
    </Container>
  </FullPageTemplate>
)

RecoveryPassword.propTypes = {
  match: PropTypes.object.isRequired,
}

export default RecoveryPassword
