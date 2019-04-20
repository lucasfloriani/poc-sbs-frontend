import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, FieldArray } from 'formik'
import { Checkbox, Grid, Heading } from 'components'
import { getSize } from '@theme'

const CheckboxWrapper = styled(Grid)`
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: ${getSize('small')};
`

const StyledHeading = styled(Heading)`
  grid-column: 1 / -1;
`

const CheckboxGroup = ({
  idKey, nameField, nameKey, payload, size, title, ...props
}) => {
  return (
    <CheckboxWrapper>
      <StyledHeading color={{ type: 'primary', position: 0 }} {...props}>
        {title}
      </StyledHeading>
      <FieldArray
        name={nameField}
        render={arrayHelpers => (
          payload.map(item => (
            <Field key={item[idKey]}>
              {({ form: { errors, touched, values } }) => (
                <Checkbox
                  id={`${nameField}-${item[idKey]}`}
                  name={nameField}
                  size={size}
                  error={touched[nameField] && errors[nameField]}
                  value={item[idKey]}
                  checked={values[nameField].includes(item[idKey])}
                  onChange={(e) => {
                    if (e.target.checked) {
                      arrayHelpers.push(item[idKey])
                    } else {
                      const idx = values[nameField].indexOf(item[idKey])
                      arrayHelpers.remove(idx)
                    }
                  }}
                >
                  {item[nameKey]}
                </Checkbox>
              )}
            </Field>
          ))
        )}
      />
    </CheckboxWrapper>
  )
}

CheckboxGroup.propTypes = {
  nameField: PropTypes.string.isRequired,
  idKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
  payload: PropTypes.array.isRequired,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default CheckboxGroup
