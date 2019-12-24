import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RatingActions } from '@store/ducks/rating'
import QueryTypes from '@enums/queryTypes'
import Badge from '@atoms/Badge'
import Button from '@atoms/Button'
import Block from '@atoms/Block'
import Flex from '@atoms/Flex'
import Form from '@molecules/Form'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import Icon from '@atoms/Icon'
import Rating from '@atoms/Rating'

const RatingForm = ({
  initialValues,
  isFetching,
  onDelete,
  onSubmit,
  queryType,
  toggleModal,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values) => {
      onSubmit(values)
      toggleModal()
    }}
    validationSchema={
      Yup.object().shape({
        rating: Yup.number()
          .typeError('Avaliação precisa ser um número')
          .integer('Avaliação precisa ser um número inteiro'),
      })
    }
  >
    {({ values, handleSubmit, setFieldValue }) => (
      <Form
        onSubmit={handleSubmit}
        header={(
          <Block backgroundColor={{ type: 'primary', position: 0 }}>
            <Grid column="auto 1fr" gap="30px" valign="center">
              <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
                {`${queryType === QueryTypes.Create ? 'Adicionar' : 'Atualizar'} Avaliação`}
              </Heading>
              {onDelete && (
                <Badge
                  onClick={() => {
                    onDelete(initialValues.id)
                    toggleModal()
                  }}
                >
                  <Icon name="Delete" />
                </Badge>
              )}
            </Grid>
          </Block>
        )}
        footer={(
          <Block as="div" fontSize="small" backgroundColor={{ type: 'primary', position: 0 }}>
            <Flex halign="flex-end">
              <Button type="submit" fontSize="small" disabled={isFetching}>
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
  </Formik>
)

RatingForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  queryType: PropTypes.oneOf(Object.values(QueryTypes)),
  toggleModal: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth: { user }, rating: { isFetching } }) => ({ gasStationID: `${user.id}`, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(RatingActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm)
