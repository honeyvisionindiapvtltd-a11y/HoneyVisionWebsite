import connectDB from "../backend/src/config/db.js";
import app from "../backend/src/app.js";
import { seedInitialProductsIfEmpty } from "../backend/src/utils/seedProducts.js";

await connectDB();
await seedInitialProductsIfEmpty();

export default app;
