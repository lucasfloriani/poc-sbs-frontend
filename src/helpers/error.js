export const getRequestErrorsFromErrorObj = (err) => {
  const messages = err.response.data.errors || []
  return messages.map(message => message.detail)
}
