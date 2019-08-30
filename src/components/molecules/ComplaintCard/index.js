import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
import {
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Paragraph,
} from 'components'

const HeaderWrapper = styled(({ ...props }) => <Grid column="1fr auto" valign="center" {...props} />)`
  ${media.lessThan('extraSmall')`
    grid-template-columns: 1fr;
  `}
`

const ComplaintCard = ({
  gasStationID,
  gasStationName,
  image,
  message,
  createdAt,
}) => (
  <Card padding="medium">
    <Grid gap="25px">
      <HeaderWrapper>
        <Heading margin="0">{gasStationName}</Heading>
        <Paragraph fontSize="small">{createdAt}</Paragraph>
      </HeaderWrapper>
      <Flex valign="center" halign="center" style={{ height: '120px' }}>
        <Image alt={message} src={image} margin="auto" maxWidth="100%" maxHeight="170px" />
      </Flex>
      <Paragraph>{message}</Paragraph>
      <Button to={`/admin/gas-stations/${gasStationID}/price-historic`}>Ver histórico de preço</Button>
    </Grid>
  </Card>
)

ComplaintCard.propTypes = {
  gasStationID: PropTypes.string.isRequired,
  gasStationName: PropTypes.string.isRequired,
  image: PropTypes.string,
  message: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

ComplaintCard.defaultProps = {
  image: 'https://via.placeholder.com/120x120.png?text=Sem%20Imagem',
}

export default ComplaintCard
