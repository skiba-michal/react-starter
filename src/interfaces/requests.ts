export interface RequestError extends Error {
  statusCode?: number;
  data?: any;
}

export interface RequestResponse<T> {
  message?: string;
  data?: T;
}
