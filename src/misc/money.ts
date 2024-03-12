export const ConvertMoneyToNumber = (money: string) => {
  console.log(money);
  if (money === '0.00') return Number(0).toFixed(2);
  return Number(money.replace(/^,$/g, '')).toFixed(2);
};
