import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--gray-500);
    border: 1px solid var(--gray-400);
    padding: 1rem;
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
`;

export const Text = styled.p`
    font-size: .875rem;
    line-height: 1.18rem;
    color: var(--gray-100);

    margin-right: auto;

    &.completed {
        text-decoration: line-through;
        color: var(--gray-300);
    }
`

export const CheckButton = styled.button`
    min-width: 1.125rem;
    height: 1.125rem;

    background: none;
    border: none;

    > div {
        width: 100%;
        height: 100%;
        border: 2px solid var(--blue);
        border-radius: 50%;
    }

    > svg {
        width: 100%;
        height: 100%;
        color: var(--purple);
    }
`

export const DeleteButton = styled.button`
    background: none;
    border: none;

    color: var(--gray-300);
`