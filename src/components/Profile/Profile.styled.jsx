import styled from 'styled-components';

const ProfileCard = styled.div`
  text-align: center;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;

const Avatar = styled.img`
  display: block;
  width: 100px;
  margin: 0 auto 20px auto;
  background-color: ${({ theme: { colors } }) => colors.lightGreyItem};
  border-radius: 50px;
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);

  ${ProfileCard}:hover & {
    scale: 1.2;
  }
`;

const Username = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: ${({ theme: { colors } }) => colors.black};
`;

const Tag = styled.p`
  color: ${({ theme: { colors } }) => colors.greyText};
  font-size: 16px;
  margin: 0 0 10px 0;
`;

const Location = styled.p`
  color: ${({ theme: { colors } }) => colors.greyText};
  font-size: 18px;
  margin: 0 0 10px 0;
`;

const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const StatsItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  background-color: ${({ theme: { colors } }) => colors.lightGreyItem};
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${({ theme: { colors } }) => colors.lightGreyCard};
  }
`;

const Label = styled.span`
  margin-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.greyText};
  font-size: 16px;
`;

const Quantity = styled.span`
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.black};
`;

export {
  ProfileCard,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
};
