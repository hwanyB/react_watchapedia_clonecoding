import React, { useState } from 'react'
import styled from '@emotion/styled';
import { BiSearch } from 'react-icons/bi';
import useMovieSearch from '../features/movie/useMovieSearch';

const Base = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
    width: 100%;
    height: 62px;
    z-index: 10;
    margin: 0 auto;
`;

const Navigation = styled.nav`
    margin: 0 auto;
    max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

const Menu = styled.li`
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    &:not(:first-child) {
        margin-left: 24px;
    }
`;

const MenuButton = styled.button<{ active?: boolean }>`
    font-size: 15px;
    color: ${({ active }) => active ? 'rgb(53, 53, 53)' : 'rgb(126, 126, 126)'};
    cursor: pointer;
    border: none;
    background: none;
`;

const SearchMenu = styled.li`
    width: 300px;
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    position: relative;
`;

const Link = styled.a`
    text-decoration: none;
`;

const TextLogo = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: rgb(255, 47, 100);
`;

const SearchContainer = styled.div`
    position: relative;
    width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 7px 8px;
`;

const SearchInput = styled.input`
    font-size: 14px;
    font-weight: 400;
    background: transparent;
    width: 100%;
    padding: 0 0 0 8px;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(53, 53, 53);
    line-height: 23px;
    outline: none;
`;

const SignIn = styled.button`
    background: transparent;
    color: rgb(116,116,123);
    font-size: 14px;
    padding: 0;
    border: 0;
    cursor: pointer;
    margin: 15px 0;
`;

const SignUp = styled.button`
    border-radius: 6px;
    font-weight: 500;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: transparent;
    color: rgb(53,53,53);
    font-size: 14px;
    border: 1px solid rgba(116,116,123, 0.6);
    cursor: pointer;
    margin: 15px 0;
`;


const SearchResultWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
    max-height: 480px;
    overflow-y: scroll;
`;

const SearchResultItem = styled.li`
    padding: 4px 6px;
    box-sizing: border-box;
    color: #222;
    font-size: 16px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
        background-color: #eee;
    }
`;

const SearchResultList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;


const Header: React.FC = () => {
    const [ searchKeyword, setSearchKeyword] = useState<string>('');
    
    const { data: searchResult } = useMovieSearch(searchKeyword);

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchKeyword(e.target.value);
    };

    return (
        <Base>
            <Navigation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href='/'>
                                <TextLogo>WATCHAPEDIA</TextLogo>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href='/'>
                                <MenuButton>영화</MenuButton>
                            </Link>
                            <Link href='/tv'>
                                <MenuButton>TV 프로그램</MenuButton>
                            </Link>
                        </Menu>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <BiSearch />
                                            <SearchInput placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해 보세요.' onChange={handleKeyword} />
                                        </SearchLabel>
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                            <SearchResultWrapper>
                                <SearchResultList>
                                    {
                                        searchResult?.data.results.map(item => (
                                            <Link key={item.id} href={`/movie/${item.id}`}>
                                                <SearchResultItem>
                                                    {item.title}
                                                </SearchResultItem>
                                            </Link>
                                        ))
                                    }
                                </SearchResultList>
                            </SearchResultWrapper>
                        </SearchMenu>
                        <Menu>
                            <SignIn>로그인</SignIn>
                        </Menu>
                        <Menu>
                            <SignUp>회원가입</SignUp>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navigation>
        </Base>
    )
}
export default Header;