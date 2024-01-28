import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <div>
            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg" />
                    </CTA>
                    <BgImage>

                    </BgImage>
                </Content>
            </Container>
        </div>
    )
}

export default Login

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    

`

const Content = styled.div`
    margin-bottom: 10vw:
    height: 100%
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    
`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index:-1;


`

const CTA = styled.div`


`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;

`
