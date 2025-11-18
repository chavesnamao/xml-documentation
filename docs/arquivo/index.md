# Detalhes do Arquivo XML

O arquivo XML é o meio de comunicação entre seu sistema e o portal Chaves na Mão. Esta seção descreve os requisitos e especificações do arquivo.

## Características Principais

### Codificação de Caracteres

O arquivo XML deverá **obrigatoriamente** conter a codificação de caracteres `UTF-8`.

::: warning Atenção
Se o arquivo for enviado com uma codificação diferente, poderão ocorrer diversos problemas:
- Todos os caracteres acentuados poderão conter erros
- O imóvel poderá não ser alocado no bairro correto, cidade correta ou tipo correto
- Outros problemas visuais e técnicos
:::

### Estrutura das Tags

Na estrutura do arquivo XML, é necessária a utilização de todas as tags, mesmo que não sejam de preenchimento obrigatório, deixando seu conteúdo vazio.

::: tip Case Sensitive
O arquivo deve contar com a estrutura de tags **case sensitive**, ou seja, para funcionarem corretamente, devem possuir os caracteres em maiúsculo/minúsculo conforme apresentados neste documento.
:::

## Próximos Passos

Continue lendo para entender em detalhes cada tag e suas especificações:
- [Estrutura do Arquivo](/arquivo/estrutura)
- [Encoding](/arquivo/encoding)
- [Tag Document](/arquivo/document)
- [Tag Imóveis](/arquivo/imoveis)
- [Tag Imóvel](/arquivo/imovel)
