// src/utils/jwt.ts
import * as jwt from "jsonwebtoken";
import type { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

/**
 * Load environment variables (adjust the relative path to your own project layout).
 */
dotenv.config({ path: path.join(__dirname, "..", "..", "..", ".env") });

/**
 * Your signing secret - MUST be defined before the app starts.
 * Keep it out of source control and rotate it regularly in production.
 */
const JWT_SECRET = process.env.JWT_SECRET as Secret;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment");
}

/**
 * Helper alias for the exact type accepted by the `expiresIn` option of `jwt.sign`.
 * (number for seconds OR the template-literal strings supported by the `ms` package,
 * e.g. "15m", "2h", "7d", …).
 */
type ExpiresIn = NonNullable<SignOptions["expiresIn"]>;

/**
 * Create a signed JWT.
 *
 * @param payload  Data you want embedded in the token (object, string, or Buffer)
 * @param expiresIn  How long the token stays valid (default "1h")
 * @returns A compact JWS string
 */
export const signToken = (
  payload: string | object | Buffer,
  expiresIn: ExpiresIn = "1h"
): string =>
  jwt.sign(payload, JWT_SECRET, { expiresIn });

/**
 * Verify and decode a JWT.
 *
 * @param token  The token sent by the client (usually in the Authorization header)
 * @returns The decoded payload if verification succeeds
 * @throws  JsonWebTokenError / TokenExpiredError on failure
 */
export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(token, JWT_SECRET) as JwtPayload;
