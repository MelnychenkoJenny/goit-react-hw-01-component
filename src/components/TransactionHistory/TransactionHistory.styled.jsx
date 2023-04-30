import styled from 'styled-components';

export const TransactionTable = styled.table`
  cursor: pointer;
  width: 400px;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 20px auto;
  border-collapse: collapse;
  color: ${({ theme: { colors } }) => colors.black};
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;

export const TransactionTHead = styled.thead`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.blue};
`;

export const TransactionTCell = styled.th`
  font-size: 12px;
  padding: 10px 0;
  border: 1px solid ${({ theme: { colors } }) => colors.lightGreyCard};
`;
