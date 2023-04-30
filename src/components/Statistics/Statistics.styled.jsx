import styled from 'styled-components';
import getRandomHexColor from 'components/constants/getRandomColor'

export const StatisticCard = styled.section`
    max-width: 400px;
    margin: 25px auto;
    text-align: center;
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.white};
    border-radius: 10px;
    overflow: hidden;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        box-shadow: ${({ theme: { colors } }) => colors.shadow};
      }
`;

export const Title = styled.h2`
margin: 0;
    padding: 20px;
    color: ${({ theme: { colors } }) => colors.greyText};
}
`;

export const StatList = styled.ul`
margin: 0;
padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
`;

export const StatItem = styled.li`
flex-basis: calc(100%/5);
background-color: ${getRandomHexColor};
transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    scale: 0.9;
    border-radius: 5px;
}
`;

export const StatWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 8px;
`;

export const Label = styled.span`
color: ${({ theme: { colors } }) => colors.black};
`;

export const Percentage = styled.span`
color: ${({ theme: { colors } }) => colors.black};
font-weight: 700;
margin-top: 5px;
`;