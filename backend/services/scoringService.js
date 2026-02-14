function calculateScore(dest, input) {
    let score = 0;
  
    if (dest.climate === input.climate) score += 25;
  
    if (
      input.budget >= dest.budgetMin &&
      input.budget <= dest.budgetMax
    ) score += 25;
  
    if (
      input.duration >= dest.durationMin &&
      input.duration <= dest.durationMax
    ) score += 25;
  
    if (dest.activities.includes(input.activity)) score += 25;
  
    return score;
  }

  
  function sensitivityAnalysis(destinations, input, baseScore) {
    const impacts = {};
  
    const variations = {
      budget: { ...input, budget: input.budget + 2000 },
      duration: { ...input, duration: input.duration + 1 },
      climate: { ...input, climate: null },
      activity: { ...input, activity: null }
    };
  
    Object.keys(variations).forEach(key => {
      let best = 0;
  
      destinations.forEach(dest => {
        let modifiedInput = variations[key];
  
        let score = 0;
  
        if (!modifiedInput.climate || dest.climate === modifiedInput.climate)
          score += 25;
  
        if (
          modifiedInput.budget >= dest.budgetMin &&
          modifiedInput.budget <= dest.budgetMax
        ) score += 25;
  
        if (
          modifiedInput.duration >= dest.durationMin &&
          modifiedInput.duration <= dest.durationMax
        ) score += 25;
  
        if (
          !modifiedInput.activity ||
          dest.activities.includes(modifiedInput.activity)
        ) score += 25;
  
        if (score > best) best = score;
      });
  
      const MAX_SCORE = 100;

impacts[key] =
  best > baseScore
    ? Number((((best - baseScore) / MAX_SCORE) * 100).toFixed(2))
    : 0;

    });
  
    const mainBottleneck = Object.keys(impacts).reduce((a, b) =>
      impacts[a] > impacts[b] ? a : b
    );
  
    return { impacts, mainBottleneck };
  }
  
  module.exports = { calculateScore, sensitivityAnalysis };
  