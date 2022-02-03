import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { useState } from "react";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container>
          <h2>Cadastrar Transação</h2>
          <input type="text" placeholder="Titulo" />
          <input type="number" placeholder="Valor" />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              isActive={type == "deposit"}
              Type={type}
              onClick={() => setType("deposit")}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              isActive={type == "withdraw"}
              Type={type}
              onClick={() => setType("withdraw")}
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input type="number" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
