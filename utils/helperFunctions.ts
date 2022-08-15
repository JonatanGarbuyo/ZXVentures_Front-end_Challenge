export function formatCurrency(amount: number) {
  const money = new Intl.NumberFormat('es-AR', {
    currency: 'ARS',
    style: 'currency',
  })

  return money.format(amount)
}
