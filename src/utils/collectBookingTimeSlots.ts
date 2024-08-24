// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const collectTimeSlots = (data: any) => {
  const slots = [];
  for (let i = 0; i < data?.length; i++) {
    slots.push(data[i]?.time_slot);
  }
  return slots;
};
