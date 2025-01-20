import type { ChildProfile, Interest } from '../types/profile';

interface MatchScore {
  score: number;
  reasons: string[];
}

export function calculateCompatibility(profile1: ChildProfile, profile2: ChildProfile): MatchScore {
  const scores: MatchScore = { score: 0, reasons: [] };
  
  // Age compatibility (weight: 30%)
  const ageDiff = Math.abs(profile1.age - profile2.age);
  if (ageDiff <= 1) {
    scores.score += 30;
    scores.reasons.push('Perfect age match');
  } else if (ageDiff <= 2) {
    scores.score += 20;
    scores.reasons.push('Close age match');
  }

  // Interest matching (weight: 40%)
  const commonInterests = findCommonInterests(profile1.interests, profile2.interests);
  const interestScore = (commonInterests.length / Math.max(profile1.interests.length, profile2.interests.length)) * 40;
  scores.score += interestScore;
  if (commonInterests.length > 0) {
    scores.reasons.push(`Shares ${commonInterests.length} interests`);
  }

  // Language compatibility (weight: 15%)
  const commonLanguages = profile1.languages.filter(lang => profile2.languages.includes(lang));
  if (commonLanguages.length > 0) {
    scores.score += 15;
    scores.reasons.push('Speaks same language(s)');
  }

  // Activity preference matching (weight: 15%)
  const commonActivities = profile1.preferredActivities.filter(act => 
    profile2.preferredActivities.includes(act)
  );
  const activityScore = (commonActivities.length / Math.max(
    profile1.preferredActivities.length,
    profile2.preferredActivities.length
  )) * 15;
  scores.score += activityScore;

  return scores;
}

function findCommonInterests(interests1: Interest[], interests2: Interest[]): Interest[] {
  return interests1.filter(int1 => 
    interests2.some(int2 => int1.name === int2.name)
  );
}

export function generateRecommendations(
  profile: ChildProfile,
  allProfiles: ChildProfile[],
  previousMatches: string[]
): ChildProfile[] {
  const scores = allProfiles
    .filter(p => p.id !== profile.id && !previousMatches.includes(p.id))
    .map(p => ({
      profile: p,
      ...calculateCompatibility(profile, p)
    }))
    .sort((a, b) => b.score - a.score);

  return scores.slice(0, 5).map(s => s.profile);
}