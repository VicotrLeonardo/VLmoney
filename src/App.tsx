import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
    </>
  );
}
