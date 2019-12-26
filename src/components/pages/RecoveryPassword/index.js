import React from 'react'
import PropTypes from 'prop-types'
import Container from '@atoms/Container'
import RecoveryPasswordForm from '@organisms/RecoveryPasswordForm'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const RecoveryPassword = ({ match }) => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <Container align="center">
      <RecoveryPasswordForm token={match.params.token} />
    </Container>
  </FullPageTemplate>
)

RecoveryPassword.propTypes = {
  match: PropTypes.object.isRequired,
}

export default RecoveryPassword
