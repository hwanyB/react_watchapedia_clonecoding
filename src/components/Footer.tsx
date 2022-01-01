import React from 'react';
import styled from '@emotion/styled';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
`

const Section = styled.section`
  background-color: #1c1d1f;
  margin: 0 auto;
`;

const Statistics = styled.section`
  background: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.span`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

const Emphasis = styled.em`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
`;

const Container = styled.section`
  background: #1c1d1f;
  padding: 40px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Left = styled.div`
    margin: 0;
`;

const TermsAndPolicy = styled.ul`
    margin: 0;
    padding: 0;
`;

const TermsAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
    &::not(::first-child) {
        margin-left: 5px;
    }
  }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Select = styled.select`
    background: transparent;
    width: 150px;
    height: 38px;
    padding: 10px;
    box-sizing: border-box;
    color: #a5a5a7;
    outline: none;
`;

const Option = styled.option`
    width: 150px;
    height: 38px;
    background-color: #101113;
    padding: 10px;
    box-sizing: border-box;
    &:focus{
        background-color: #fff;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Footer: React.FC = () => {
    return (
        <Base>
     <Section>
       <Statistics>
         <Summary>
           지금까지&nbsp;
           <Emphasis>
             ★ 633,986,967 개의 평가가
           </Emphasis>
           &nbsp;쌓였어요.
         </Summary>
       </Statistics>
       <Container>
         <ContentWrapper>
           <Left>
             <TermsAndPolicy style={{marginBottom: '15px'}}>
               <TermsAndPolicyItem style={{fontWeight: 'bold'}}>서비스 이용약관</TermsAndPolicyItem>
               <TermsAndPolicyItem style={{fontWeight: 'bold'}}>개인정보 처리방침</TermsAndPolicyItem>
               <TermsAndPolicyItem style={{fontWeight: 'bold'}}>회사 안내</TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy>
                 <TermsAndPolicyItem style={{fontWeight: 'bold'}}>고객센터</TermsAndPolicyItem>
                 <TermsAndPolicyItem>
                     <span>cs@watchapedia.co.kr</span>
                     <span>, 02-515-9985</span>
                 </TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy>
                 <TermsAndPolicyItem style={{fontWeight: 'bold'}}>광고문의</TermsAndPolicyItem>
                 <TermsAndPolicyItem>
                     <span>ad@watcha.com</span>
                 </TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy style={{marginBottom: '15px'}}>
                 <TermsAndPolicyItem style={{fontWeight: 'bold'}}>제휴 및 대외 협력</TermsAndPolicyItem>
                 <TermsAndPolicyItem>
                     <span>https://watcha.team/contact</span>
                 </TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy>
               <TermsAndPolicyItem>주식회사 왓챠</TermsAndPolicyItem>
               <TermsAndPolicyItem>대표 박태훈</TermsAndPolicyItem>
               <TermsAndPolicyItem>서울특별시 서초구 강남대로 343 신덕빌딩 3층</TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy>
               <TermsAndPolicyItem>
                   <span>사업자 등록번호 </span>
                   <span> 211-88-66013</span>
               </TermsAndPolicyItem>
             </TermsAndPolicy>
             <TermsAndPolicy>
               <TermsAndPolicyItem>
                   <span style={{fontWeight: 'bold'}}>WATCHAPEDIA </span>
                   <span> © 2021 by WATCHA, Inc. All rights reserved.</span>
               </TermsAndPolicyItem>
             </TermsAndPolicy>

           </Left>
           <Right>
               <Select>
                   <Option>한국어</Option>
                   <Option>english</Option>
                   <Option>日本語</Option>
               </Select>
               <Icons>
                   <a href='https://www.facebook.com/watchaKR/' target='_blank'>
                    <IoLogoFacebook size='36' color='#848485' style={{marginLeft:'10px'}} />
                   </a>
                   <a href='https://twitter.com/watcha_kr' target='_blank'>
                    <IoLogoTwitter size='36' color='#848485' style={{marginLeft:'10px'}} />
                   </a>
                   <a href='https://watcha.team/' target='_blank'>
                    <AiOutlineTeam size='36' color='#848485' style={{marginLeft:'10px'}} />
                   </a>
               </Icons>
           </Right>
         </ContentWrapper>
       </Container>
     </Section>
   </Base>
    )
}
export default Footer;