import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    max-width: 46rem;

    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0 1rem;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: .8rem;

        p {
            color: var(--blue);
            font-size: .875rem;
            font-weight: 700;

            &.purple {
                color: var(--purple);
            }
        }

        span {
            background: var(--gray-400);
            color: var(--gray-200);
            padding: 3px 9px;
            border-radius: 999px;
            font-size: .75rem;
            font-weight: 700;
        }
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

export const ThereAreNoTasks = styled.section`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: var(--gray-300);
    text-align: center;

    > svg {
        opacity: .3;
    }

    p {
        font-weight: 700;
    }
`