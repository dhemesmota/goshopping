export function formatPrice(value: number) {
  const price = Number(value.toFixed(2));
  return price.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}
