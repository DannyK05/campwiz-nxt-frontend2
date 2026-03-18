import type { WikimediaUsername } from "@/types/_"
import { RoundStatus, type RoundStatusType } from "../round/status"
import { Campaign, type CampaignType } from "./campaignType"

export interface CampaignCreate {
    coordinators: WikimediaUsername[]
    description: string
    endDate: string
    image: string
    language: string
    name: string
    rules: string
    startDate: string
    isPublic: boolean
    status: RoundStatusType
    projectId: string
    campaignType: CampaignType

}
export const initialCampaignCreate: CampaignCreate = {
    projectId: "",
    coordinators: [],
    description: "",
    endDate: (new Date()).toISOString(),
    image: "",
    language: "",
    name: "",
    rules: "",
    startDate: (new Date()).toISOString(),
    isPublic: false,
    status: RoundStatus.PENDING,
    campaignType: Campaign.COMMONS
}
export interface CampaignUpdate extends CampaignCreate {
    campaignId: string
}
export const campaignReducer = (state: CampaignCreate | CampaignUpdate, action: Partial<CampaignCreate | CampaignUpdate>) => {
    return {
        ...state,
        ...action
    }
}
export type CampaignAction = Partial<CampaignCreate | CampaignUpdate>
export type CampaignCreateDispatch = (action: CampaignAction) => void
