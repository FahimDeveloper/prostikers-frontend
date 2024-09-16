export const collectDateStatus = (
  training_end_date: Date | string,
  training_start_date?: Date | string
) => {
  // Helper function to compare dates by year, month, and day
  const compareDates = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Get the current date
  const currentDate = new Date();
  const trainingEndDate = new Date(training_end_date);

  if (!training_start_date) {
    if (compareDates(currentDate, trainingEndDate)) {
      return "today";
    } else if (currentDate > trainingEndDate) {
      return "completed";
    } else if (currentDate < trainingEndDate) {
      return "upcoming";
    }
  }

  if (training_start_date) {
    const trainingStartDate = new Date(training_start_date);

    if (currentDate > trainingEndDate) {
      return "completed";
    } else if (currentDate < trainingStartDate) {
      return "upcoming";
    } else if (
      currentDate >= trainingStartDate &&
      currentDate <= trainingEndDate
    ) {
      return "running";
    }
  }
};
