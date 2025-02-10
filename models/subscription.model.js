import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema({});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
