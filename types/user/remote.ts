import { AuthOutput, LogoutOutput, WithdrawOutput } from './client';

export interface AuthResponse {
  data: AuthOutput;
}

export interface LogoutResponse {
  data: LogoutOutput;
}
export interface WithdrawResponse {
  data: WithdrawOutput;
}
