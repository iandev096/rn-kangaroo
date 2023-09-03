import * as SecureStore from "expo-secure-store";
import APP from "src/constants/APP";

export class JWTService {
  private static instance: JWTService;

  private constructor() {}

  public static getInstance(): JWTService {
    if (!JWTService.instance) {
      JWTService.instance = new JWTService();
    }

    return JWTService.instance;
  }

  async getJWT(key: string = APP.AUTH_JWT_KEY) {
    try {
      const jwt = await SecureStore.getItemAsync(key);
      return jwt;
    } catch (error) {
      console.log(error);
    }
  }

  async setJWT(jwt: string, key: string = APP.AUTH_JWT_KEY) {
    try {
      await SecureStore.setItemAsync(key, jwt);
    } catch (error) {
      console.log(error);
    }
  }
}
