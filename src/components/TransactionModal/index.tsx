import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState, useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [titulo, setTitulo] = useState("");
  const [amount, setAmount] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      titulo,
      amount,
      categoria,
      tipo,
    });

    setTitulo("");
    setAmount(0);
    setCategoria("");
    setTipo("deposite");
    onRequestClose();
  }

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

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
          <input
            type="text"
            placeholder="Titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              isActive={tipo == "deposit"}
              Type={tipo}
              onClick={() => setTipo("deposit")}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              isActive={tipo == "withdraw"}
              Type={tipo}
              onClick={() => setTipo("withdraw")}
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
