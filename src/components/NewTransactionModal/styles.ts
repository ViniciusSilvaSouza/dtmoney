import styled from 'styled-components';

export const Container = styled.div`

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    border:none;

    &::placeholder {
        color: var(--text-body);
    }

    & + input { 
        margin-top: 1rem;
    }
}

button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;

    height: 4rem;
    background: var(--green);
    color: #FFFFFF;
    border-radius: 0.25rem;
    font-size:1rem;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
}

`;