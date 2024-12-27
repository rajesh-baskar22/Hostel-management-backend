const express = require("express");
const bodyParser = require("body-parser");
const connectMongoDB = require("./Config/configDB");
const app = express();
const cors = require("cors");

require("dotenv").config();
const DefaultRoutes = require("./Routes/DefaultRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const RoomRoutes = require("./Routes/RoomRoutes");
const MaintenanceRoutes = require("./Routes/MaintenanceRoute");
const BillingRoutes=  require("./Routes/BillingRoutes");
const ResidentRoutes =require("./Routes/ResidentRotes");
const DashboardRoutes = require("./Routes/DashboardRoutes");
const StaffRoutes = require("./Routes/StaffRoutes") 
const PaymentRoute = require("./Routes/PaymentRoutes");    
connectMongoDB();
app.use(cors());
app.use(bodyParser.json());
app.use("/",DefaultRoutes);
app.use("/api/auth",UserRoutes);
app.use("/api/auth",RoomRoutes);
app.use("/api/auth",MaintenanceRoutes);
app.use("/api/auth/maintenance",MaintenanceRoutes);
app.use("/api/auth/resident",ResidentRoutes);
app.use("/api/auth",BillingRoutes);
app.use("/api/auth",DashboardRoutes);
app.use("/api/auth",StaffRoutes);
app.use("/api/auth",PaymentRoute)

const port = process.env.PORT || 2001;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
});