import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Paragraph,
} from 'components'
import { HeaderWrapper } from './style'

const ComplaintCard = ({
  createdAt,
  gasStationID,
  gasStationName,
  image,
  message,
}) => (
  <Card padding="medium">
    <Grid gap="25px">
      <HeaderWrapper>
        <Heading margin="0">{gasStationName}</Heading>
        <Paragraph fontSize="small">{createdAt}</Paragraph>
      </HeaderWrapper>
      <Flex valign="center" halign="center" style={{ height: '120px' }}>
        <Image
          alt={message}
          src={image
            ? `${process.env.REACT_APP_API_URL}${image}`
            : 'https://via.placeholder.com/120x120.png?text=Sem%20Imagem'}
          margin="auto"
          maxWidth="100%"
          maxHeight="120px"
        />
      </Flex>
      <Paragraph>{message}</Paragraph>
      <Button to={`/admin/gas-stations/${gasStationID}/price-historic`}>Ver histórico de preço</Button>
    </Grid>
  </Card>
)

ComplaintCard.propTypes = {
  createdAt: PropTypes.string.isRequired,
  gasStationID: PropTypes.string.isRequired,
  gasStationName: PropTypes.string.isRequired,
  image: PropTypes.string,
  message: PropTypes.string.isRequired,
}

export default ComplaintCard
