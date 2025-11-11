export interface ILoaderStore {
  activeRequests: number;
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}
