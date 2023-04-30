import styled from 'styled-components';

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  background-color: white;
  width: 170px;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const Status = styled.span`
  height: 10px;
  width: 10px;
  display: block;
  background-color: ${({ theme: { colors } }) => colors.black};
  border-radius: 50%;
  background-color: ${({ status, theme: { colors } }) =>
    status ? colors.green : colors.red};
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
    ${FriendListItem}:hover & {
      scale: 1.35;
    }
`;
