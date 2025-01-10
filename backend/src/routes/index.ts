import { Router } from "express";
import { TicketService } from "../services/TicketService";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bem-vindo ao Clinic Attendance System!");
});

// Rota para listar os tickets
router.get("/tickets", async (req, res) => {
    try {
      const tickets = await TicketService.getTickets(); // Método para obter os tickets
      res.json(tickets); // Retorna os tickets no formato JSON
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter os tickets." });
    }
  });

export default router;
