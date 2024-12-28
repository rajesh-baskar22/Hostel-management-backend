Hostel Management System- BackEnd
Usage
Admin
* Log in to the Admin dashboard to manage rooms, residents, and staff.
* View reports and analytics for hostel operations.
* Broadcast notices to Residents and Staff.
Resident
* Log in to the Resident portal to view room details and payment status.
* Raise maintenance requests.
* View notices from Admin.
Staff
* Log in to the Staff portal to view assigned tasks and schedules.
* Update task status.
Roles and Responsibilities
Admin
* Room Management: Add, update, or delete room details.
* Resident Management: Approve new Residents and manage their details.
* Staff Management: Assign and monitor staff duties.
* Broadcast Notices: Post important updates for all users.
Resident
* Room Details: View room assignments.
* Payment History: Check payment status and history.
* Maintenance Requests: Report issues directly to the Staff.
* Notices: Stay updated with Admin announcements.
Staff
* Task Management: View and update assigned duties.
* Maintenance Requests: Address and resolve Resident issues.
* Availability: Update availability status for shifts.
API Documentation
The API follows RESTful principles:
* Admin Endpoints:
    *post("/register",userRegister);
    *post("/login",userLogin);
    *get("/userdashboard",authMiddleware,userDashboard);
    *put("/updateaccount/:id",userAccountUpdate);
    *get("/useraccountdetails/:id",userAccountDetails);
* Resident Endpoints:
   *get("/maintenance/:residentId", getMaintenanceDetails);
    *get("/room/:residentId", getResidentRoomDetails);
    *get("/invoice/:residentId",authMiddleware,generateInvoice)
* Staff Endpoints:
    *get("/maintenance-requests/:id", getMaintenanceRequestByStaffId);
