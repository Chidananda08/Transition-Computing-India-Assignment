module.exports = [
    {
      id: "valuationFeePaid",
      description: "Valuation Fee Paid",
      condition: (data) => data.isValuationFeePaid === true,
    },
    {
      id: "ukResident",
      description: "UK Resident",
      condition: (data) => data.isUkResident === true,
    },
    {
      id: "riskRatingMedium",
      description: "Risk Rating Medium",
      condition: (data) => data.riskRating === "Medium",
    },
    {
      id: "ltvBelow60",
      description: "LTV Below 60%",
      condition: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  