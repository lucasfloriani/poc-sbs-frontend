import React from 'react'
import PropTypes from 'prop-types'
import {
  BadgeIcon,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
} from 'components'

const PriceFuelCard = ({
  id,
}) => (
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="4px 0 8px">Título</Heading>
        <Paragraph>Paragrafo 1</Paragraph>
        <Paragraph>Paragrafo 2</Paragraph>
      </Flex>
      <Flex>
        <Link to={`/admin/gas-stations/${id}`}><BadgeIcon icon="edit" /></Link>
        <BadgeIcon icon="delete" />
      </Flex>
    </Grid>
  </Card>
)

PriceFuelCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default PriceFuelCard
