export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US').format(new Date(value))
}
