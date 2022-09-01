import APP from "src/constants/app";

export class JWTService {
  private static instance: JWTService;

  private constructor() {}

  public static getInstance(): JWTService {
    if (!JWTService.instance) {
      JWTService.instance = new JWTService();
    }

    return JWTService.instance;
  }

  getJWT(key: string = APP.AUTH_JWT_KEY) {
    return "jwt";
  }
}
