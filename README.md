# Conclusão do desafio da MdSystem

## Estrutura Inicial
A estrutura de pastas e configurações originais foram mantidas.

## Estilos Globais

### Adições
Nos estilos foram adicionadas algumas variáveis de cor adicionais que estavam no design mas não estavam no arquivo.

### Mudanças
Nos breakpoints, o `$mobile` foi alterado para `575.98px` para corrigir a sequência de largura das telas.

## Estrutura dos Componentes

Em `features/home` temos os containers principais de cada parte da página. Dentro deles, é feita a requisição para a obtenção dos arquivos necessários de cada seção.

### COMPONENTES PRINCIPAIS
- `HeaderContainer`
- `MainContainer`
- `FooterContainer`

### COMPONENTES DE SEÇÃO

#### HeaderContainer
- `TopArea`
- `Banner`
- `DesktopMenu`
- `MobileMenu`

#### MainContainer
- `About`
- `AllServices`

#### FooterContainer
- `FooterContent`

## Fluxo de Código
1. Os **COMPONENTES PRINCIPAIS** em `/features/home` fazem a requisição com a API, usando o método estático `HomeService.all` do arquivo `Services.ts`.
2. Essa requisição é chamada dentro de `fetchAll`, que foi criada em `HomeSlice` no arquivo `Slice.ts`, usando os reducers para gerenciar os estados da requisição e adicionar os valores em `entries` no `State`.
3. Em `views` são importados os **COMPONENTES PRINCIPAIS**, que comportam suas seções dentro deles.
4. Os **COMPONENTES PRINCIPAIS** passam como `props` os valores referentes a cada componente dentro deles (`About`, `AllServices`, etc.).
5. Os **COMPONENTES DE SEÇÃO** fazem uma verificação inicial para se certificar de só renderizar quando o valor for diferente de `null` ou `undefined`.
6. Os **COMPONENTES DE SEÇÃO** se renderizam na página.

## Soluções
- **Adaptabilidade:** Menu dinâmico para a versão mobile.
- **Modularização:** Foram criados componentes reutilizáveis em diferentes partes do conteúdo principal, ex: `SectionTitle`, `MainSection`.
- **Interação Dinâmica:** Os componentes `About` e `AllServices` interagem de acordo com a ação do usuário.
- **Tipagem:** Foram criadas interfaces de acordo com os tipos de dados que a API retorna.
- **Conversão:** Textos em formatos diferentes foram convertidos com `MDX` e `HtmlToMd`.
- **Responsividade:** Layout responsivo e fiel ao design enviado.

## Tecnologias usadas
- HTML
- CSS
- Node.js
- React
- TypeScript
- Redux

## Bibliotecas adicionadas
- `react-scroll`: Para navegação suave.
- `react-icons`: Para ícones.
- `html-to-md`: Para conversão de arquivo para formato MDX.
- `cross-env`: Para o script `start` funcionar em Windows e Linux.

