export const IMAGE_SIZE = [
  { value: "", label: "Default" },
  { value: "square", label: "Square" },
  { value: "square_hd", label: "Square HD" },
  { value: "portrait_4_3", label: "Portrait_4_3" },
  { value: "portrait_16_9", label: "Portrait_16_9" },
  { value: "landscape_4_3", label: "landscape_4_3" },
  { value: "landscape_16_9", label: "landscape_16_9" },
];

export const STATUS = [
  {
    label: "In Queue",
    value: 1,
    style: "in_queue",
  },
  {
    label: "In Progress",
    value: 2,
    style: "in_progress",
  },
  {
    label: "Completed",
    value: 3,
    style: "completed",
  },
  {
    label: "Saved",
    value: 4,
    style: "saved",
  },
  {
    label: "Error",
    value: 5,
    style: "in_queue",
  },
  {
    label: "-",
    value: undefined,
    style: "none",
  },
];
