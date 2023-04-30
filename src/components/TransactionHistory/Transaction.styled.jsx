import styled from 'styled-components';

export const TransactionTRow = styled.tr`
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${({ theme: { colors } }) => colors.lightGreyItem};
  }
`;

export const TransactionTCell = styled.th`
  font-size: 12px;
  font-weight: 400;
  padding: 10px 0;
  border: 1px solid ${({ theme: { colors } }) => colors.lightGreyCard};
`;
