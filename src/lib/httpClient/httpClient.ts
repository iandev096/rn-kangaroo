import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { JWTService } from "src/services/jwt";
import {
  IHttpClient,
  IHttpPayloadable,
  IHttpRequestParameters,
  Response,
} from "./types";

export class HttpClient implements IHttpClient<AxiosInstance> {
  instance: AxiosInstance;
  private jwtService: JWTService;

  constructor(baseURL: string, config: AxiosRequestConfig = {}) {
    this.instance = axios.create({
      baseURL,
      ...config,
    });

    this.jwtService = JWTService.getInstance();
  }

  get<T>(parameters: IHttpRequestParameters): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      const { url, requiresToken, queryParams } = parameters;

      const options = this.createRequestOptions(requiresToken, queryParams);

      this.instance
        .get(url, options)
        .then((response) => {
          resolve({ status: response.status, data: response.data });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  post<T>(
    parameters: IHttpRequestParameters & IHttpPayloadable<any>
  ): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      const { payload, requiresToken, url, queryParams } = parameters;

      const options = this.createRequestOptions(requiresToken, queryParams);

      this.instance
        .post(url, payload, options)
        .then((response) => {
          resolve({ status: response.status, data: response.data });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  patch<T>(
    parameters: IHttpRequestParameters & IHttpPayloadable<any>
  ): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      const { payload, requiresToken, url, queryParams } = parameters;

      const options = this.createRequestOptions(requiresToken, queryParams);

      this.instance
        .patch(url, payload, options)
        .then((response) => {
          resolve({ status: response.status, data: response.data });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  delete<T>(parameters: IHttpRequestParameters): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      const { url, requiresToken, queryParams } = parameters;

      const options = this.createRequestOptions(requiresToken, queryParams);

      this.instance
        .delete(url, options)
        .then((response) => {
          resolve({ status: response.status, data: response.data });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  private createRequestOptions(requiresToken: boolean, queryParams = {}) {
    const options: AxiosRequestConfig = { headers: {}, params: {} };

    if (requiresToken) {
      const token = this.jwtService.getJWT();
      options.headers!.Authorization = `Bearer ${token}`;
    }

    if (queryParams) {
      options.params = queryParams;
    }

    return options;
  }
}
