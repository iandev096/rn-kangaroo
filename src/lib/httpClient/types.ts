type Object = Record<string, string | number>;

export interface IHttpRequestParameters {
  url: string;
  requiresToken: boolean;
  queryParams?: Object;
}

export interface IHttpPayloadable<T = any> {
  payload: T;
}

export type Response<T> = {
  data?: T;
  status: number;
};

export interface IHttpClient<HTTP_INSTANCE> {
  instance: HTTP_INSTANCE;
  get<T>(parameters: IHttpRequestParameters): Promise<Response<T>>;
  post<T>(
    parameters: IHttpRequestParameters & IHttpPayloadable
  ): Promise<Response<T>>;
  patch<T>(
    parameters: IHttpRequestParameters & IHttpPayloadable
  ): Promise<Response<T>>;
  delete<T>(parameters: IHttpRequestParameters): Promise<Response<T>>;
}
