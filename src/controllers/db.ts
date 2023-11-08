import { createConnection } from "mysql";

export const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "forencer_data",
  });

    db.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("database connected");
    }
  });
  