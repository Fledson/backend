# ANOTAÇÕES

## CLASSES
 - Usado o Pattern Singleton, realizando a exportação desta forma => `module.exports = new ContactController();`, a classe será instanciado apenas uma vez pelo *NODE*, assim, ao iniciar ele será instanciado e sempre que for importado e usado em alguma classe, será chamado sempre aquela mesma instancia e nunca uma instancia nova

## CONTROLLERS
  ### CONVENÇÃO DE NOMENCLATURA DE METODOS DENTRO DOS CONTROLLERS
    * INDEX => Listar todos os registros
    * SHOW => Lista um registro
    * STORE => Cria um novo registro
    * UPDATE => Atualiza um registro
    * DELETE => Deleta um registro

## REPOSITORIES
  ### Constancia
    é interessante manter constancia nos nomes dos metodos -> listar, atualizar, deletar em todas as classes de repositorios para os metodos que srão repetitivos.
    Porem nada impede de ter metodos especificos para cada uma.
  ### Repostitory Pattern
    - Usando esse *pattern*, será usada uma *Layer(camada)* de abstração para acesso ao *Data Source* - (Data Source: Fonte de Dados (Array, SQL, NoSQL,
  .json, API), dessa forma o controller não irá interagir direto com o Data Source e vai se concentrar na regra de negocio.
    - Assim, o *Repository* tratará somente informações e regras do Data Source isolada mente

    Não fazer:
      Controller <-> Data Source

    Correto:
      Controller <-> Repository <-> Data Source
