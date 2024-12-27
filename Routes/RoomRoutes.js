const express = require("express");
const router = express.Router();
const {
  getALLRoomsDetails,
  createRoom,
  roomAssignment,
  updateRoomAssignments,
  updateRoomAssignmentsDates,
  deleteRoomAssignment,
  getAllAssignedRooms,
  getRoomById,
  getAllResidents,
  deleteRoom,
} = require("../Controllers/RoomController");
const authMiddleware = require("../Middleware/authMiddleware");

router.get("/getrooms",authMiddleware, getALLRoomsDetails);
router.post("/createroom",authMiddleware, createRoom);
router.post("/room-assignment", authMiddleware,roomAssignment);
router.put("/room-assignments/:id",authMiddleware, updateRoomAssignments);
router.get("/getroombyid/:id",authMiddleware, getRoomById);
router.get("/getresidents",authMiddleware, getAllResidents);

router.get('/getAllAssignedRooms',authMiddleware,getAllAssignedRooms);
router.put('/updateRoomAssignmentsDates/:id', authMiddleware,updateRoomAssignmentsDates);
router.delete('/deleteRoomAssignment/:id',authMiddleware,deleteRoomAssignment);
router.delete('/deleteRoom/:id',authMiddleware,deleteRoom);
module.exports = router;
