import styled from 'styled-components/native';
// import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: ${colors.dark};
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const ImageProduct = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
