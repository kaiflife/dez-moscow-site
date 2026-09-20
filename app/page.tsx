"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PriceTable from "@/components/PriceTable";
import Preparation from "@/components/Preparation";
import BottomForm from "@/components/BottomForm";
import ModalForm from "@/components/ModalForm";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PriceTable />
      <Preparation />
      <BottomForm />
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
