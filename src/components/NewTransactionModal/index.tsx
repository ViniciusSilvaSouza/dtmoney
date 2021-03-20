import Modal from 'react-modal';
import { Container } from './styles';
import CloseImg from '../../assets/close.svg';


interface NewTrasactionModalPrpos {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTrasactionModalPrpos) {
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
            <Container>
                <h2> cadastrar transação</h2>
                <input placeholder="Título" />
                <input placeholder="Valor" />
                <input placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}