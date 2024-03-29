import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.get("/gestionpacientes", (req, res) => {
  res.render("gestionpacientes");
});

router.get("/actualizaradmin", (req, res) => {
  res.render("actualizaradmin");
});

router.get("/actualizarpacientes", (req, res) => {
  res.render("actualizarpacientes");
});

router.get("/consulta", (req, res) => {
  res.render("consulta");
});

router.get("/consultarpaciente", (req, res) => {
  res.render("consultarpaciente");
});

router.get("/consultaradmin", (req, res) => {
  res.render("consultaradmin");
});

router.get("/eliminaradmin", (req, res) => {
  res.render("eliminaradmin");
});

router.get("/eliminarpacientes", (req, res) => {
  res.render("eliminarpacientes");
});

router.get("/gestionadmin", (req, res) => {
  res.render("gestionadmin");
});

router.get("/gestionpacientes", (req, res) => {
  res.render("gestionpacientes");
});

router.get("/ingresaradmin", (req, res) => {
  res.render("ingresaradmin");
});

router.get("/ingresarpaciente", (req, res) => {
  res.render("ingresarpaciente");
});

export default router;
