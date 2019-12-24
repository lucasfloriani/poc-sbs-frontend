import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import Button from '@atoms/Button'
import Block from '@atoms/Block'
import Flex from '@atoms/Flex'
import Form from '@molecules/Form'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import Text from '@atoms/Text'
import ImageInput from '@molecules/ImageInput'

const ComplaintForm = ({
  initialValues,
  isFetching,
  onSubmit,
  toggleModal,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={({ gas_station_id: gasStationID, image, message }) => {
      const formData = new FormData()
      formData.append('gas_station_id', gasStationID)
      formData.append('image', image, `complaint-image.${image.type.split('/')[1]}`)
      formData.append('message', message)
      onSubmit(formData)
      toggleModal()
    }}
    validationSchema={
      Yup.object().shape({
        message: Yup.string().typeError('Mensagem precisa ser um texto').required('Campo mensagem é obrigatório'),
        image: Yup.string().typeError('Imagem fornecida é inválida'),
      })
    }
  >
    {({
      values,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleReset,
      handleSubmit,
      setFieldValue,
    }) => (
      <Form
        onSubmit={handleSubmit}
        header={(
          <Block backgroundColor={{ type: 'primary', position: 0 }}>
            <Grid column="auto 1fr" gap="30px" valign="center">
              <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
                Criar Denúncia
              </Heading>
            </Grid>
          </Block>
        )}
        footer={(
          <Block as="div" fontSize="small" backgroundColor={{ type: 'primary', position: 0 }}>
            <Flex halign="flex-end">
              <Button type="reset" fontSize="small" onClick={handleReset} disabled={isFetching}>
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
            name="message"
            labelTitle="Mensagem"
            error={touched.message && errors.message}
            active={touched.message || values.message !== ''}
            value={values.message}
            required
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          <Grid>
            <Heading
              color={{ type: 'grayscale', position: 0 }}
              fontSize="normal"
              hoverColor={{ type: 'grayscale', position: 0 }}
              level={3}
            >
              Imagem da ocorrência
            </Heading>
            <ImageInput
              accept="image/*"
              height="150px"
              onDropCallback={obj => setFieldValue('image', obj)}
              image={values.image}
              error={errors.image}
            />
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
)

ComplaintForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapStateToProps = ({ complaint: { isFetching } }) => ({ isFetching })

export default connect(mapStateToProps)(ComplaintForm)
