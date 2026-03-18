import type { IDType } from "../_";

export const Role = {
  Coordinator: "coordinator",
  Jury: "jury",
};

export type RoleType = (typeof Role)[keyof typeof Role];

export interface Role {
  roleId: IDType;
  type: RoleType;
  userId: IDType;
  projectId: IDType;
  targetProjectId: IDType | null;
  campaignId: IDType;
  roundId: IDType;
  isAllowed: boolean;
  totalAssigned: number;
  totalEvaluated: number;
  totalScore: number;
  permission: number;
}
export type RoleWithUsername = Role & { username: string };
