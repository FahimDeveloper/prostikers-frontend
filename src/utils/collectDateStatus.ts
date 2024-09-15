export const collectDateStatus = (
  training_end_date: Date | string,
  traning_start_date?: Date | string
) => {
  if (!traning_start_date) {
    const currentDate = new Date();
    const trainingDate = new Date(training_end_date);
    if (currentDate == trainingDate) {
      return "today";
    } else if (currentDate > trainingDate) {
      return "completed";
    } else if (currentDate < trainingDate) {
      return "upcoming";
    }
  }
  if (traning_start_date) {
    const currentDate = new Date();
    const trainingStartDate = new Date(traning_start_date);
    const trainingEndDate = new Date(training_end_date);
    if (currentDate > trainingEndDate) {
      return "completed";
    } else if (currentDate < trainingStartDate) {
      return "upcoming";
    } else if (
      currentDate < trainingEndDate &&
      trainingStartDate > currentDate
    ) {
      return "running";
    }
  }
};
