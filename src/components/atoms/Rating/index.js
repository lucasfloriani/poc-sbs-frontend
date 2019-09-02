import React from 'react'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'
import { Flex, Paragraph } from 'components'

const Rating = ({
  labelTitle, name, onChange, value,
}) => (
  <Flex flow="column">
    <Paragraph color={{ type: 'grayscale', position: 0 }}>{labelTitle}</Paragraph>
    <StarRatings
      rating={value}
      starRatedColor="#193336"
      starHoverColor="#193336"
      changeRating={onChange}
      numberOfStars={5}
      starDimension="30px"
      starSpacing="3px"
      name={name}
    />
  </Flex>
)

Rating.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default Rating
