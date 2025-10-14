import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getOutgoingFriendReqs } from "../controllers/user.controller.js";
import { getFriendRequests, acceptFriendRequest, sendFriendRequest,getMyFriends,getRecommendedUsers } from "../controllers/user.controller.js";
const router = express.Router()

//use protectRoute middleware before calling nay further routes
router.use(protectRoute)

router.get("/", getRecommendedUsers)
router.get("/friends", getMyFriends)
router.post("/friend-request/:id",sendFriendRequest)
router.put("/friend-request/:id/accept",acceptFriendRequest)

router.get("/friend-requests",getFriendRequests)
router.get("/outgoing-friend-requests",getOutgoingFriendReqs)

export default router
