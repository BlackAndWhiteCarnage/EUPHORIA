export const isNewestItemHandler = (published_at) => {
  const date = new Date();

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  const itemAddedYear = +published_at.substring(0, 4);
  const itemAddedMonth = +published_at.substring(5, 7);
  const itemAddedDay = +published_at.substring(8, 10);

  // Check how many days is in month
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // If item was added in current year or in December (last year) return true
  if (itemAddedYear === currentYear || (currentYear - 1 === itemAddedYear && itemAddedMonth === 12)) {
    // If item was added in the same month return true and highlight that it is the "newest"
    if (currentMonth === itemAddedMonth) {
      if (currentDay - itemAddedDay <= 14) {
        return true;
      }
      // If item was added in the December pass January (else if) add +1 to the item month and if that equals current month return true
    } else if ((itemAddedMonth === 12 ? 1 : itemAddedMonth + 1) === currentMonth) {
      // If item was added in last 14 days return true and highlight that it is the "newest"
      if (currentDay - itemAddedDay + daysInMonth(itemAddedMonth, itemAddedYear) <= 14) {
        return true;
      }
    }
  }
};
