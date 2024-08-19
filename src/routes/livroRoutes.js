import {Router} from "express"
import { deleteLivros, getBuscarLivros, getLivros, postLivros, putLivros } from "../controllers/livrosControllers";

const router = Router();
  //Ver Todos
  router.get("/livros",getLivros)
  //cadastra
  router.post("/livros",postLivros)
  //Ver 1 especifico
  router.get("/livros/:id",getBuscarLivros);
  //atualizar
  router.put("/livros/:id",putLivros)
  //Delete
  router.delete("/livros/:id",deleteLivros)

  export default router;