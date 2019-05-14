import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
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
  Text,
} from 'components'

const ComplaintForm = ({
  initialValues,
  onDelete,
  onSubmit,
  queryType,
  toggleModal,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
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
        dirty,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        isSubmitting,
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
                    {`${queryType === QueryTypes.Create ? 'Criar' : 'Atualizar'} Denúncia`}
                  </Heading>
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
              <Block
                as="div"
                fontSize="small"
                backgroundColor={{ type: 'primary', position: 0 }}
              >
                <Flex halign="flex-end">
                  {queryType === QueryTypes.Create && (
                    <Button
                      type="reset"
                      fontSize="small"
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}
                    >
                      Limpar
                    </Button>
                  )}
                  <Button type="submit" fontSize="small" disabled={!dirty || isSubmitting}>
                    {`${queryType === QueryTypes.Create ? 'Criar' : 'Atualizar'}`}
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
  onDelete: PropTypes.func,
  queryType: PropTypes.oneOf(Object.values(QueryTypes)),
  toggleModal: PropTypes.func.isRequired,
}

export default ComplaintForm