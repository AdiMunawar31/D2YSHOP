import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Center, Container, Left, Right, Wrapper, Language, SearchContainer, Input, Logo, MenuItem } from './Styles/Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>D2YSHOP.</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={9} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
