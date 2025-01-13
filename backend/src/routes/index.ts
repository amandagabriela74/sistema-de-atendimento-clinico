import { Router } from "express";
import { TicketController } from "../controllers/TicketController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bem-vindo ao Clinic Attendance System!");
});

// Rota para listar os tickets
router.get("/tickets", TicketController.getTickets);

export default router;
