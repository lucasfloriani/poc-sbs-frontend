import React from 'react'
import NotFound from '@organisms/NotFound'
import UserFooter from '@organisms/UserFooter'
import UserMenu from '@organisms/UserMenu'
import FullPageTemplate from '@templates/FullPageTemplate'

const NotFoundPage = () => (
  <FullPageTemplate header={<UserMenu />} footer={<UserFooter />}>
    <NotFound />
  </FullPageTemplate>
)

export default NotFoundPage
