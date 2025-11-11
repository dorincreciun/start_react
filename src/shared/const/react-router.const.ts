export const TRouter = {
  DEFAULT: "/",
  FALLBACK: "*",
};

export type TRouter = (typeof TRouter)[keyof typeof TRouter];
