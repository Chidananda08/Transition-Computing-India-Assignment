document.addEventListener("DOMContentLoaded", async () => {
    const checklistContainer = document.getElementById("checklist");
  
    try {
      const response = await fetch("/api/checklist");
      const { results } = await response.json();
  
      results.forEach((rule) => {
        const ruleElement = document.createElement("div");
        ruleElement.className = `rule ${rule.passed ? "passed" : "failed"}`;
        ruleElement.textContent = `${rule.description}: ${rule.passed ? "Passed" : "Failed"}`;
        checklistContainer.appendChild(ruleElement);
      });
    } catch (error) {
      checklistContainer.textContent = "Failed to load checklist results.";
    }
  });
  