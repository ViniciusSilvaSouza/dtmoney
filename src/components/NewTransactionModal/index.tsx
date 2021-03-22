import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import React, { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTrasactionModalPrpos {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTrasactionModalPrpos) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();


        const data = { title, value, category, type }

        api.post('/transactions', data)
    }

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={CloseImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2> cadastrar transação</h2>

                <input
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Título" />

                <input
                    type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red">
                        <img src={outcomeImg} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />


                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal >
    );
}