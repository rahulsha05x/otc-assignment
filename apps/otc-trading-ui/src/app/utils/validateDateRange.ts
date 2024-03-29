export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  const today = new Date();
  const oneMonthFromNow = new Date();

  
  today.setHours(0, 0, 0, 0);
  oneMonthFromNow.setHours(0, 0, 0, 0);

  
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

  return date >= today && date <= oneMonthFromNow;
}
