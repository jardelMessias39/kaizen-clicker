# Diário de Bordo da IA e Análise Arquitetural (IA_LOG)

Durante todo o projeto, utilizei a inteligência artificial como minha copiloto de desenvolvimento, mas assumindo sempre a direção técnica. Minha principal preocupação inicial foi garantir a solidez da arquitetura e das regras de negócio.

## 1. Arquitetura e Motor do Jogo (Engine)
Logo de cara, orientei a IA a não usar um `setInterval` simples e problemático para o loop do jogo. Em vez disso, implementamos o `requestAnimationFrame` junto com uma lógica de **Delta Time baseada em Timestamps**. A cada quadro da tela, nosso hook captura o tempo exato, passa para a função `processTick` e despacha os novos pontos para o nosso estado global (utilizando a biblioteca Zustand). Essa escolha técnica garantiu que o jogo continuasse processando a fábrica corretamente, calculando a produção real mesmo se o usuário minimizasse a aba.
*(Exemplos de Commits Atômicos usados nessa fase: `feat(engine): implementa loop com delta time`, `refactor(store): adiciona estado global com Zustand`).*

## 2. UX/UI e "Juice" (Engajamento Visual)
Com o decorrer do desenvolvimento, meu foco foi dar uma "interação viva" ao jogo. Pensei em um engajamento visual intenso (*Juice*), com animações enigmáticas e respostas claras na UI. Cada elemento de UX foi pensado para trazer clareza sobre o que está acontecendo: a ativação de habilidades, os custos, e o investimento em melhorias para reduzir desperdícios e manter o gargalo saudável (Lean Manufacturing).
*(Exemplos de Commits Atômicos: `style(layout): ajusta cores e glassmorphism do painel principal`, `feat(ui): adiciona animações de feedback visual`).*

## 3. Inovações e Funcionalidades Extras
Para ir além do que foi proposto no desafio original, decidi idealizar e implementar mecânicas extras que enriqueceram a experiência:
- **Botão de Produção Manual:** Um botão principal com física que, ao ser clicado, acelera a produção enquanto a velocidade passiva ainda está baixa.
- **Termômetro de Esforço:** Uma tela dinâmica que calcula o "calor do motor" baseado nos seus cliques por segundo.
- **Letreiro de Ranking Global:** Uma vitrine em letreiro (Marquee) que demonstra o ranking dos jogadores, sendo atualizada automaticamente em background a cada 5 minutos, sem travar a tela do jogador.
- **Métricas Avançadas:** O indicador de PPS (Pontos Por Segundo), que dá a média exata do impacto na produção instantaneamente após comprar uma habilidade.
- **Áudio e Feedback Dinâmico:** Sons não estáticos, mas dinâmicos a cada clique, e textos flutuantes que sobem na tela para confirmar cada compra.
*(Exemplos de Commits Atômicos dessas features: `feat(audio): adiciona sons dinâmicos aos cliques`, `feat(components): cria letreiro de ranking atualizado a cada 5 min`).*

## Conclusão e Sincronização
A sincronização do meu raciocínio arquitetural com o versionamento feito através de **Commits Atômicos** permitiu que o projeto crescesse de forma modular, rastreável e altamente profissional. Foi um trabalho de forte liderança no direcionamento técnico, delegando o trabalho repetitivo e de sintaxe fina para a IA.
