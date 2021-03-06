function formatDate(dates: string) {
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(dates);
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  return `${date}/${month}/${year}`;
}

export { formatDate };
