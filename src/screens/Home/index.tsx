import React from 'react';

import {
    Container,
    Header,
    ContentWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlighCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Home() {
    return (
        <Container>
            <Header>
                <ContentWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/cristianordon.png' }} />
                        <User>
                            <UserGreeting>Olá, Usuário! </UserGreeting>
                        </User>
                    </UserInfo>

                    <Icon name="logout"/>
                </ContentWrapper>
            </Header>

            <HighlighCards>
                <HighlightCard />
                <HighlightCard />
            </HighlighCards>
            
        </Container >
    );
}