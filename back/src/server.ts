import { app } from "./app";
import { database } from "./database";

const port = 3000

  app.listen(port, async () => {
    try {
    
        await database.authenticate();
        await database.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
