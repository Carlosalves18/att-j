import {Router} from "express"
import {} from "../controllers/clientesControllers";

const router = Router();
  //Ver Todos
  router.get("/funcionarios",getFuncionarios)
  //cadastra
  router.post("/funcionarios",postFuncionarios)
  //Ver 1 especifico
  router.get("/funcionarios/:id",getBuscarFuncionarios);
  //atualizar
  router.put("/funcionarios/:id",putFuncionarios)
  //Delete
  router.delete("/funcionarios/:id",deleteFuncionarios)

  export default router;