### **Objetivo do Jogo**

O objetivo deste jogo simples é uma corrida entre dois personagens, um representando a "Cidade" e o outro representando o "Campo". Cada jogador deve pressionar as teclas específicas para mover seu personagem em direção à linha de chegada. O primeiro a ultrapassar a linha de chegada vence e ganha um ponto.

### **Como Funciona o Jogo**

1. **Abertura do Jogo:**

   * Quando o jogo começa, os dois personagens ("Cidade" e "Campo") aparecem na tela. A "Cidade" começa na posição inicial (0,100) e o "Campo" começa na posição inicial (0,300).

2. **Movimento dos Personagens:**

   * A "Cidade" se move para a direita quando você pressiona a tecla **`a`**.
   * O "Campo" se move para a direita quando você pressiona a tecla **`s`**.

   O movimento de cada personagem é aleatório, com um intervalo entre **10 a 20 unidades** a cada vez que a tecla é pressionada, o que significa que cada vez que o jogador aperta a tecla, o personagem avança uma distância diferente.

3. **Linha de Chegada:**

   * Existe uma linha de chegada localizada na posição **x = 550** (na borda direita da tela). O objetivo de ambos os jogadores é alcançar essa linha.
   * A linha de chegada é representada por uma série de pequenos quadrados brancos em uma coluna na lateral direita da tela.

4. **Condição de Vitória:**

   * Quando a "Cidade" ou o "Campo" ultrapassam a linha de chegada (ou seja, sua posição no eixo `x` é maior que 550), o jogo para e o vencedor é anunciado no centro da tela.
   * A pontuação de quem venceu aumenta em 1 ponto, e o jogo entra em estado de **pausa** (`jogoAtivo = false`).

5. **Pontuação:**

   * A pontuação de cada personagem é exibida no canto superior esquerdo da tela, com o número de vitórias de "Cidade" e "Campo".

6. **Cor de Fundo Dependente do Foco da Tela:**

   * Quando o jogo está em foco, o fundo é **azul**. Se o jogo não estiver em foco (como se a janela for minimizada ou você clicar em outra aba), o fundo muda para **verde**.

7. **Finalização do Jogo:**

   * O jogo só reinicia quando você manualmente pressiona a tecla **`r`** para reiniciar o jogo. Caso contrário, o jogo termina após um vencedor ser determinado e entra em pausa.

### **Visão Geral do Fluxo:**

* O jogo começa com ambos os personagens prontos para correr.
* O jogador de "Cidade" aperta a tecla **`a`** para avançar.
* O jogador de "Campo" aperta a tecla **`s`** para avançar.
* O primeiro personagem que ultrapassar a linha de chegada ganha e recebe um ponto.
* O jogo exibe quem venceu e a pontuação é atualizada.
* O jogo pode ser reiniciado pressionando **`r`**.
