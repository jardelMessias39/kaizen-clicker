export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(num);
};

export const formatPercentage = (num: number): string => {
  return new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 }).format(num);
};
