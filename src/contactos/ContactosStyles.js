import styled from 'styled-components';

export const Container = styled.div`
    padding: 2px;
`;

export const SectionContact = styled.div`
    &:last-child {
      margin-bottom: 10px;
    }
`;

export const GroupContact = styled.div`
    background: #171717;
    border-radius: 20px;
    padding: 0px 15px;

    &:last-child {
      border-bottom: none;
    }
`;

export const IconContact = styled.div`
    background: linear-gradient(360deg, hsla(185, 25%, 50%, 1) 0%, hsla(170, 42%, 71%, 1) 100%);
    border-radius: 50%;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Letter = styled.div`
    color: #ababab;
    text-transform: uppercase;
    padding: 10px 15px;
`;

export const NameContact = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 100%;
    min-height: 50px;
    text-transform: capitalize;
    border-bottom: ${({ $expanded, $islast }) => ($expanded ? 'none' : $islast ? 'none' : '1px solid #393939')};
`;

export const ContactDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const ExtraInfo = styled.div`
    display: flex;
    border-bottom: 1px solid #393939;
    padding: 10px;
`;
