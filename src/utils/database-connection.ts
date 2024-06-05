import mongoose from "mongoose";

const databaseConnection = async (connectionString: string) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");
  } catch (err) {
    console.error({
      message: "Error connecting to the database",
      errMsg: (err as any).message,
    });
  }
};

export default databaseConnection;
