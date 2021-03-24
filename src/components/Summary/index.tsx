import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';

import { Container } from "./styles";


export function Summary() {

    const { transactions } = useContext(TransactionContext);
    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong> R$1.000</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong> - R$500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong> R$500</strong>
            </div>
        </Container>
    );
}