export const accessType = (user) => {
  if (user.cpf) return 'user'
  if (user.cnpj) return 'gas-station'
  return 'admin'
}
