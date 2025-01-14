import { Router } from "express";
import { TicketController } from "../controllers/TicketController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bem-vindo ao Clinic Attendance System!");
});

router.get("/tickets", TicketController.getTickets);

router.post("/tickets", TicketController.createTicket);

router.post("/tickets/next", TicketController.callNextTicket);

export default router;
