export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Array of Months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month and year
  const day = date.getUTCDate().toString().padEnd(2, "0");
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Format date as "Day, Month Name, Year"
  return `${day} ${month}, ${year}`;
}
