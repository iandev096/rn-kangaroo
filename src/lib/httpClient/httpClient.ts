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

  constructor(
    baseURL: string,
    config: Omit<AxiosRequestConfig, "baseURL"> = {}
  ) {
    this.instance = axios.create({
      ...config,
      baseURL,
    });

    this.jwtService = JWTService.getInstance();
  }

  get<T>(parameters: IHttpRequestParameters): Promise<Response<T>> {
    return new Promise<Response<T>>(async (resolve, reject) => {
      const { url, requiresAuthToken, queryParams } = parameters;

      const options = await this.createRequestOptions(
        requiresAuthToken,
        queryParams
      );

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
    return new Promise<Response<T>>(async (resolve, reject) => {
      const { payload, requiresAuthToken, url, queryParams } = parameters;

      const options = await this.createRequestOptions(
        requiresAuthToken,
        queryParams
      );

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
    return new Promise<Response<T>>(async (resolve, reject) => {
      const { payload, requiresAuthToken, url, queryParams } = parameters;

      const options = await this.createRequestOptions(
        requiresAuthToken,
        queryParams
      );

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
    return new Promise<Response<T>>(async (resolve, reject) => {
      const { url, requiresAuthToken, queryParams } = parameters;

      const options = await this.createRequestOptions(
        requiresAuthToken,
        queryParams
      );

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

  private async createRequestOptions(
    requiresAuthToken: boolean,
    queryParams = {}
  ) {
    const options: AxiosRequestConfig = { headers: {}, params: {} };

    if (requiresAuthToken) {
      const token = await this.jwtService.getJWT();
      options.headers!.Authorization = `Bearer ${token}`;
    }

    if (queryParams) {
      options.params = queryParams;
    }

    return options;
  }
}
