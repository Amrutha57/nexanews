import cors from "cors";

const app = express();
app.use(cors()); // 🔥 Add this!
app.use(express.json());
