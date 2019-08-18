import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import {
  Button,
  Block,
  Flex,
  Form,
  Grid,
  Heading,
  Text,
} from 'components'

const ComplaintForm = ({
  initialValues,
  isFetching,
  onSubmit,
  toggleModal,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values)
        toggleModal()
      }}
      validationSchema={
        Yup.object().shape({
          message: Yup.string()
            .typeError('Mensagem precisa ser um texto')
            .required('Campo mensagem é obrigatório'),
        })
      }
      render={({
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
      }) => {
        const commomEvents = {
          onChange: handleChange,
          onBlur: handleBlur,
          onFocus: handleBlur,
        }

        return (
          <Form
            onSubmit={handleSubmit}
            header={(
              <Block backgroundColor={{ type: 'primary', position: 0 }}>
                <Grid column="auto 1fr" gap="30px" valign="center">
                  <Heading
                    color={{ type: 'grayscale', position: 4 }}
                    hoverColor={{ type: 'grayscale', position: 4 }}
                  >
                    Criar Denúncia
                  </Heading>
                </Grid>
              </Block>
            )}
            footer={(
              <Block
                as="div"
                fontSize="small"
                backgroundColor={{ type: 'primary', position: 0 }}
              >
                <Flex halign="flex-end">
                  <Button
                    type="reset"
                    fontSize="small"
                    onClick={handleReset}
                    disabled={isFetching}
                  >
                    Limpar
                  </Button>
                  <Button type="submit" fontSize="small" disabled={isFetching}>
                    Criar
                  </Button>
                </Flex>
              </Block>
            )}
          >
            <Grid valign="flex-start">
              <Text
                id="message"
                name="message"
                labelTitle="Mensagem"
                error={touched.message && errors.message}
                active={touched.message || values.message !== ''}
                value={values.message}
                required
                {...commomEvents}
              />
            </Grid>
          </Form>
        )
      }}
    />
  )
}

ComplaintForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapStateToProps = ({ complaint: { isFetching } }) => ({ isFetching })

export default connect(mapStateToProps)(ComplaintForm)
