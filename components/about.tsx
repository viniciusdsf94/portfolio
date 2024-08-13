"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mim");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
      Sou um programador front-end com 7 anos de experiência, desde as tecnologias mais puras até o uso de frameworks que as otimizaram ao longo do tempo. Hábil em reproduzir layouts com precisão de pixel e na otimização de código para melhorar a performance, usabilidade e escalabilidade.
      Tenho como minha principal base de estudos no momento o uso de animações nas minhas aplicações utilizando frameworks como GSAP, Three.js e Framer Motion.
      </p>

      
    </motion.section>
  );
}
