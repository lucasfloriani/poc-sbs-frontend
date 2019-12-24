import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Label from '@atoms/Label'
import Error from '@molecules/Error'
import { getOptionsFrom } from '@theme'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  ${({ type }) => type !== 'number' && css`flex-direction: column;`}
  flex-wrap: wrap;
  justify-items: center;
  position: relative;
`

function withFormWrapper(WrappedComponent) {
  const FormWrapper = ({ required, ...props }) => {
    const {
      id,
      active,
      color,
      error,
      focusBorderColor,
      labelTitle,
      type,
    } = props
    return (
      <Wrapper type={type}>
        <WrappedComponent {...props} active={active} id={id} />
        <Label
          htmlFor={id}
          active={active}
          color={color}
          focusBorderColor={focusBorderColor}
          required={required}
        >
          {labelTitle}
        </Label>
        {error && <Error>{error}</Error>}
      </Wrapper>
    )
  }

  FormWrapper.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.shape({
      type: PropTypes.oneOf(getOptionsFrom('palette')),
      position: PropTypes.number,
    }),
    error: PropTypes.string,
    focusBorderColor: PropTypes.shape({
      type: PropTypes.oneOf(getOptionsFrom('palette')),
      position: PropTypes.number,
    }),
    id: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    labelColor: PropTypes.shape({
      type: PropTypes.oneOf(getOptionsFrom('palette')),
      position: PropTypes.number,
    }),
    required: PropTypes.bool,
    type: PropTypes.string,
  }

  FormWrapper.defaultProps = {
    color: { type: 'grayscale', position: 1 },
  }

  return FormWrapper
}

export default withFormWrapper
