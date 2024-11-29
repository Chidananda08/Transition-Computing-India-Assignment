const express = require("express");
const cors = require("cors");
const { fetchData } = require("./fetchData");
const { evaluateChecklist } = require("./evaluate");

const app = express();
app.use(cors());
app.use(express.static("public")); // Serve frontend files

// API to evaluate checklist
app.get("/api/checklist", async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateChecklist(data);
    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to process checklist" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
