export default function formatDate(date: Date) {
  const newDate = new Date(date);
  return `${newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()} ${newDate.toLocaleString('en-US', { month: 'long' })} ${newDate.getFullYear()}`;
}
