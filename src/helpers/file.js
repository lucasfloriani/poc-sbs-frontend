import { readAsArrayBuffer } from 'promise-file-reader'

const getTextFromArrayBuffer = (resp) => {
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
