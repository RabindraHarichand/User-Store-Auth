import { envs } from "../../config";
import { MongoDatabase } from "../mongo/mongo-database";

(async () => {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });
  await main();

  MongoDatabase.disconnect();
})();

async function main() {
  //1 Crear users
  //2 Crear categories
  //3 Crear products

  console.log("SEEDED");
}
