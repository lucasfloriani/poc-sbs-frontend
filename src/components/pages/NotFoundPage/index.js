import React from 'react'
import {
  Footer,
  FullPageTemplate,
  Header,
  NotFound,
} from 'components'

const NotFoundPage = () => {
  return (
    <FullPageTemplate header={<Header />} footer={<Footer />}>
      <NotFound />
    </FullPageTemplate>
  )
}

export default NotFoundPage
