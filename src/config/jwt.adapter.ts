import jwt from "jsonwebtoken";

export class JwtAdapter {
  // DI?

  static async generateToken(payload: any, duration: string = "2h") {
    return new Promise((resolve) => {
      jwt.sign(payload, "SEED", { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);

        return resolve(token);
      });
    });
  }

  static validateToken(token: string) {
    return;
  }
}
