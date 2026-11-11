# Mente em Equilíbrio

> Um guia de bolso para quem trabalha, estuda e anda sem tempo para si.

Projeto de Extensão em Empreendedorismo – Turma 2 · IESB · Polo Águas Lindas de Goiás  
Orientação: Prof.ª Tania Cruz

O **Mente em Equilíbrio** é um guia digital gratuito, acessado por QR Code, voltado a estudantes que conciliam trabalho e estudos. Ele reúne em uma única página contatos de apoio, dicas de rotina, playlists e um desafio de movimento. Tudo em uma leitura de cerca de dois minutos.

> ⚠️ Este guia não substitui atendimento profissional. Em caso de crise, ligue **188 (CVV, 24h)** ou **192 (SAMU)**.

---

## Funcionalidades

| Seção | O que faz |
|---|---|
| **Está difícil agora?** | Botões de ligação direta para o CVV (188) e o SAMU (192) |
| **Como você está hoje?** | Dica personalizada para cada humor. Em "Ansioso(a)", abre um exercício de respiração guiado (4-4-6, 5 ciclos) |
| **1. Precisa conversar?** | Caminhos de apoio: IESB, UBS e CVV |
| **2. Organize sua rotina** | Dicas de tempo, estudo e sono, um cronômetro de foco (25/5/15 min) e uma lista de até 3 prioridades do dia |
| **3. Música para o seu dia** | Playlists *Foco* e *Calma* |
| **4. Mexa-se** | Desafio de 30 min/dia com marcação dos dias da semana e barra de progresso |
| **Roda de conversa** | Informações sobre o encontro mensal no polo |

O humor do dia, as prioridades e os dias marcados ficam salvos no **próprio navegador** (`localStorage`). As prioridades se renovam a cada dia e a semana zera toda segunda-feira. Nenhum dado é enviado a servidores.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, flexbox, grid, layout *mobile-first*)
- JavaScript puro, sem frameworks nem dependências

## Estrutura

```
mente-em-equilibrio/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── main.js            # inicializa todos os módulos
    └── modules/
        ├── storage.js     # leitura e gravação no navegador
        ├── mood.js        # humor do dia + respiração guiada
        ├── timer.js       # cronômetro de foco
        ├── todo.js        # 3 prioridades do dia
        └── week.js        # desafio Mexa-se
```

## Como executar

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` em qualquer navegador.

Não é preciso instalar nada nem rodar um servidor. Para publicar, basta enviar a pasta para qualquer hospedagem estática (GitHub Pages, Netlify, Vercel) e gerar o QR Code com o link final.

> Ao criar um novo módulo, adicione o `<script>` dele no `index.html` **depois** do `storage.js` e **antes** do `main.js`.

---

## Reflexão do grupo

### Conexão com os ODS

O projeto Mente em Equilíbrio conectou-se ao tema norteador, o **ODS 16 – Paz, Justiça e Instituições Eficazes**, ao propor uma instituição de ensino mais acolhedora, participativa e atenta às necessidades dos estudantes, aproximando-os dos serviços de apoio e ampliando o acesso à informação. A proposta também contribui para os **ODS 3** e **ODS 4**, ligados à saúde mental e à educação de qualidade.

### Mudança de percepção

Ao longo do projeto, a percepção do grupo mudou. No início, associávamos o ODS 16 apenas à justiça e à segurança pública; depois, compreendemos que instituições eficazes também são aquelas que cuidam de quem faz parte delas. Também passamos a entender que a sobrecarga dos estudantes não é falta de esforço, mas resultado de rotinas intensas e da falta de acesso ao apoio.

### Diálogo com as áreas de formação

O tema dialogou de forma cada vez mais clara com as áreas de formação dos integrantes. Alguns contribuíram com a criação do guia digital e o uso da tecnologia como ferramenta de cuidado, enquanto outros trouxeram a visão de planejamento, organização e a vivência de quem trabalha sob prazos e pressão. Essa diversidade enriqueceu a proposta, resultando em uma solução que une tecnologia, viabilidade e cuidado humano. Com isso, percebemos o papel social de nossas áreas: elas não resolvem apenas problemas técnicos, mas podem melhorar a qualidade de vida das pessoas.

### Aprendizados

Por fim, o projeto ensinou o grupo a dividir tarefas, cumprir prazos e decidir em conjunto, mesmo com rotinas corridas. O contato com a realidade dos estudantes reforçou a importância da empatia e mostrou que soluções simples e de baixo custo podem gerar impacto real.# Mente-e-equilibrio
