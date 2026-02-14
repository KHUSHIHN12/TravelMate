const Destination = require("../models/Destination");
const { calculateScore, sensitivityAnalysis } = require("../services/scoringService");

exports.getRecommendation = async (req, res, next) => {
  try {
    const input = req.body;

    const destinations = await Destination.find();

    let bestDestination = null;
    let bestScore = 0;

    destinations.forEach(dest => {
      const score = calculateScore(dest, input);

      if (score > bestScore) {
        bestScore = score;
        bestDestination = dest;
      }
    });

    const analysis = sensitivityAnalysis(destinations, input, bestScore);

    res.json({
      bestDestination,
      baseScore: bestScore,
      analysis: analysis.impacts,
      mainBottleneck: analysis.mainBottleneck,
      explanation: `Your trip quality is mainly limited by ${analysis.mainBottleneck}.`
    });
  } catch (error) {
    next(error);
  }
};
