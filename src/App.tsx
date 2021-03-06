import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./TransactionsContext";

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
    <TransactionProvider>
      <GlobalStyle />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
    </TransactionProvider>
  );
}
