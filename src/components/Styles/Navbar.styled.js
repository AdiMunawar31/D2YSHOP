import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
`
// Left
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 20px;
`

export const Input = styled.input`
    border: none;
    outline: none;
`

export const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

// Center
export const Center = styled.div`
    flex: 1;
`

export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`


// Right
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5px;
`

export const MenuItem = styled.div`
    margin-left: 25px;
    font-size: 14px;
    cursor: pointer;
`
