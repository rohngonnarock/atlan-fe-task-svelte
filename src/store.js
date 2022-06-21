import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 1,
    text: "sdfsdfs",
  },
  {
    id: 2,
    rating: 5,
    text: "sdfsdfs",
  },
  {
    id: 3,
    rating: 3,
    text: "sdfsdfs",
  },
  {
    id: 4,
    rating: 2,
    text: "sdfsdfs",
  },
]);
