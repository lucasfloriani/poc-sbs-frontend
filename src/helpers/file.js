import { readAsArrayBuffer } from 'promise-file-reader'
import uuidv4 from 'uuid/v4'

export const getFileBlobByURL = async (url) => {
  const requestResponse = await fetch(url)
  return requestResponse.blob()
}

export const getTextFromArrayBuffer = (resp) => {
  return btoa(new Uint8Array(resp).reduce((data, byte) => data + String.fromCharCode(byte), ''))
}

export const getInfoFileByBlob = async (blob, name = 'file') => {
  const readerResult = await readAsArrayBuffer(blob)
  const file = new File([readerResult], name)
  const content = getTextFromArrayBuffer(readerResult)
  return {
    content: `data:${blob.type};base64,${content}`,
    name: file.name,
    mimetype: blob.type,
    size: file.size,
  }
}

export const createFileNameByMimeType = type => `${uuidv4()}.${type.split('/')[1]}`

export const getImageInfoByURL = async (url) => {
  // TODO: Ajustar a URL de um modo que não precise ser fixo (server=8080, client=3000)
  const fileURL = url.includes('http') ? url : `http://localhost:8080/${url}`
  const blob = await getFileBlobByURL(fileURL)
  const fileName = createFileNameByMimeType(blob.type)
  return getInfoFileByBlob(blob, fileName)
}
