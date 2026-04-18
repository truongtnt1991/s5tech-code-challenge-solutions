import express from "express";
import healthRoute from "./routes/health.routes";
import resourceRoute from "./routes/resource.routes";

const app = express();

app.use(express.json());

app.use("/api/health", healthRoute);
app.use("/api/resources", resourceRoute);

export default app;
