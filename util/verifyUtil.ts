// badge info returned to view
export type BadgeInfo = {
  badgeName: string,
  badgeDescription: string,
  badgeImage: string,
  awardedTo: string,
  date: Date,
}

// badge object returned from db
export type Badge = {
  awardedTo: string,
  badgeDescription: string,
  badgeImage: string,
  badgeName: string,
  date: number,
  userid: string,
}

export type VerifyData = {
  valid: boolean,
  error: string|null,
  badgeInfo: BadgeInfo|null,
}

export function verifyUUID(uuid: string) {
  return uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i) !== null;
}
