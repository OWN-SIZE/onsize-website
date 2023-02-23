import { AuthOutput, LogoutOutput } from './client';

export interface AuthResponse {
  data: AuthOutput;
}

export interface LogoutResponse {
  data: LogoutOutput;
}
