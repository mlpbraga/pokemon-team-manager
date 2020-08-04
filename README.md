# pokemon-team-manager

## Dependências
- Docker v19.03.12
- Docker Compose v1.26.0
- Yarn v1.22.4

## Como rodar localmente?

1. Instale as dependências;
2. Dentro do diretório, execute o comando `make build`;
3. Acesse (pelo browser ou por ferramentes de requisições REST) o endpoint localhost:3004/health , é esperado que seja retornado um resultado como o JSON abaixo

```json
{
    "status": "OK"
}
```

## Comandos úteis

- `make build`: sobe os containers necessários para rodar a aplicação
- `make rebuild`: derruba os containers da aplicação, apaga dados remanescentes e sobre os containers novamente
- `make start`: inicializa os containers da aplicação
- `make db-migrate`: executa as migrações do banco de dados, criando as tabelas necessárias para a aplicação
- `make db-seed`: popula o banco de dados com alguns dados de teste
- `make logs`: exibe os logs dos containers relacionados à aplicação
- `make db-logs`: exibe os logs do container do banco de dados
- `make api-logs`: exibe os logs do container da API
