import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RatingActions } from '@store/ducks/rating'
import QueryTypes from '@enums/queryTypes'
import {
  Badge,
  Button,
  Block,
  Flex,
  Form,
  Grid,
  Heading,
  Icon,
  Rating,
} from 'components'

const RatingForm = ({
  initialValues,
  onDelete,
  onSubmit,
  queryType,
  toggleModal,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
      }}
      validationSchema={
        Yup.object().shape({
          rating: Yup.number()
            .typeError('Avaliação precisa ser um número')
            .integer('Avaliação precisa ser um número inteiro'),
        })
      }
      render={({
        values,
        dirty,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <Form
          onSubmit={handleSubmit}
          header={(
            <Block backgroundColor={{ type: 'primary', position: 0 }}>
              <Grid column="auto 1fr" gap="30px" valign="center">
                <Heading>{`${queryType === QueryTypes.Create ? 'Adicionar' : 'Atualizar'} Avaliação`}</Heading>
                {onDelete && (
                  <Badge
                    onClick={() => {
                      onDelete(initialValues.id)
                      toggleModal()
                    }}
                  >
                    <Icon icon="delete" />
                  </Badge>
                )}
              </Grid>
            </Block>
          )}
          footer={(
            <Block as="div" fontSize="small" backgroundColor={{ type: 'primary', position: 0 }}>
              <Flex halign="flex-end">
                <Button type="submit" fontSize="small" disabled={!dirty || isSubmitting}>
                  {`${queryType === QueryTypes.Create ? 'Adicionar' : 'Atualizar'}`}
                </Button>
              </Flex>
            </Block>
          )}
        >
          <Grid valign="flex-start">
            <Rating
              labelTitle="Rating"
              name="rating"
              onChange={value => setFieldValue('rating', value)}
              value={values.rating}
            />
          </Grid>
        </Form>
      )}
    />
  )
}

RatingForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  queryType: PropTypes.oneOf(Object.values(QueryTypes)),
  toggleModal: PropTypes.func.isRequired,
}


const mapStateToProps = ({ auth: { user } }) => ({ gasStationID: `${user.id}` })
const mapDispatchToProps = dispatch => bindActionCreators(RatingActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm)
