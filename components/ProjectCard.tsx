"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import Parallax from "@/components/Parallax";

export default function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 42, clipPath: "inset(12% 0 0 0)" }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
    <Parallax className="project-parallax" distance={20}><Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image">
        <Image src={project.cardCover ?? project.cover} alt={`Обложка проекта ${project.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="project-open" aria-hidden="true">↗</span>
      </div>
      <div className="project-meta">
        <span>{project.number} / {project.category}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3><span aria-hidden="true">↗</span>
      </div>
      <p className="project-summary">{project.summary}</p>
    </Link></Parallax>
    </motion.div>
  );
}
