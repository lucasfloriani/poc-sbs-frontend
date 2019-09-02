import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { Paragraph } from 'components' // Loader
import { readAsArrayBuffer } from 'promise-file-reader'
import { getInfoFileByBlob } from '@helpers/file'
import {
  Wrapper,
  FieldWrapper,
  Message,
  StyledImage,
  Error,
} from './style'

const ImageInput = ({
  accept, error, height, image, onDropCallback,
}) => {
  const [imageData, setImageData] = useState({ content: '', name: '' })
  useEffect(() => {
    (async () => {
      if (!image) {
        setImageData({ content: '', name: '' })
        return
      }

      const { content, name } = await getInfoFileByBlob(image)
      setImageData({ content, name })
    })()
  }, [image])

  return (
    <Wrapper>
      <Dropzone
        accept={accept}
        onDrop={async (acceptedFiles) => {
          if (acceptedFiles.length === 0) return
          const photo = acceptedFiles[0]
          const readerResult = await readAsArrayBuffer(photo)
          const blob = new Blob([readerResult], { type: photo.type })
          onDropCallback(blob)
        }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          const message = isDragActive ? 'Solte o arquivo aqui...' : 'Solte um arquivo aqui ou clique para selecionar um.'
          return (
            <div {...getRootProps()}>
              <FieldWrapper height={height} isDragActive={isDragActive}>
                <input {...getInputProps()} />
                <StyledImage maxHeight={height} zoom={1.05} alt={imageData.name} src={imageData.content} />
                {!imageData.content && <Message isDragActive={isDragActive}>{message}</Message>}
              </FieldWrapper>
            </div>
          )
        }}
      </Dropzone>
      {error && <Error>{Object.entries(error).map(([key, value]) => <Paragraph key={key}>{value}</Paragraph>)}</Error>}
    </Wrapper>
  )
}

ImageInput.propTypes = {
  accept: PropTypes.string,
  error: PropTypes.object,
  height: PropTypes.string,
  image: PropTypes.any,
  onDropCallback: PropTypes.func.isRequired,
}

ImageInput.defaultProps = {
  accept: 'image/*',
  height: '300px',
}

export default ImageInput
