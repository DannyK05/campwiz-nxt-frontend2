import type { WikimediaUsername } from "../_";
import type { Round } from "../round";
import type { RoundStatusType } from "../round/status";
import type { CampaignType } from "./campaignType";

export interface Role {
  campaignId: string;
  isAllowed: boolean;
  roleId: string;
  roundId: string;
  totalAssigned: number;
  totalEvaluated: number;
  totalScore: number;
  type: string;
  userId: string;
}

export interface Campaign {
  campaignType: CampaignType;
  projectId: string;
  campaignId: string;
  createdAt: string;
  createdById: string;
  description: string;
  endDate: string;
  image: string;
  language: string;
  name: string;
  roles: Role[] | null;
  coordinators: WikimediaUsername[] | null;
  rounds: Round[] | null;
  rules: string;
  startDate: string;
  isPublic: boolean;
  status: RoundStatusType;
  archivedAt: null | {
    time: string;
    valid: boolean;
  };
}
