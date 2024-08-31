export const collecTimeDuration = (start: Date, end: Date) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const durationInMilliseconds = endDate.getTime() - startDate.getTime();
  const durationInMinutes = Math.floor(durationInMilliseconds / (1000 * 60));
  return `${durationInMinutes} minutes`;
};
