const rulesConfig = require("./rulesConfig");

const evaluateChecklist = (data) => {
  return rulesConfig.map((rule) => ({
    id: rule.id,
    description: rule.description,
    passed: rule.condition(data),
  }));
};

module.exports = { evaluateChecklist };
