import React from 'react'
import {
  FullPageTemplate,
  NotFound,
} from 'components'

const NotFoundPage = () => (
  <FullPageTemplate mainPadding="0" style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}>
    <NotFound />
  </FullPageTemplate>
)

export default NotFoundPage
