export const Campaign = {
  Categorization: "categorization",
  COMMONS: "commons",
  WIKIPEDIA: "wikipedia",
  WIKIDATA: "wikidata",
  OTHER: "other",
};

export type CampaignType = (typeof Campaign)[keyof typeof Campaign];
