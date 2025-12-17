export const collectTrainingBookingTimeSlots = (data: any, lane?: string) => {
  const slots = [];
  for (let i = 0; i < data?.length; i++) {
    slots.push(data[i]?.time_slot);
  }
  if (lane) {
    return [{ lane: lane!, slots }];
  } else {
    return slots;
  }
};

export const collectFacilityBookingTimeSlots = (data: any[] = []) => {
  const map = new Map<string, { lane: string; slots: string[] }>();

  data.forEach((item) => {
    if (!map.has(item.lane)) {
      map.set(item.lane, { lane: item.lane, slots: [] });
    }
    map.get(item.lane)!.slots.push(item.time_slot);
  });

  return Array.from(map.values());
};
