/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    fontFamily: {
      padrao: ['Oxanium', 'sans-serif'],
      destaque: ['Figtree', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    colors: {
      'azul-destaque': '#1976d2',
      'azul-hover': '#0d47a1',
      'ancora': '#00796b',
      'ancora-hover': '#004d40',
      'amarelo': '#bdbd3f',
      'verde': '#008000',
      'laranja': '#ffa500',
      'azul': '#0000ff',
      'vermelho': '#ff0000',
    },
    backgroundImage: {
      'hero-pattern': "url('https://cdn.pixabay.com/photo/2017/04/06/21/38/cube-2209365_1280.jpg')",
      'cartao-brawlhalla': "url('../image/cartao-brawlhalla.png')",
      'cartao-capoeira': "url('../image/cartao-capoeira.png')",
      'cartao-cubomagico': "url('../image/cartao-cubomagico.png')",
      'cartao-fotografia': "url('../image/cartao-fotografia.png')",
      'cartao-tatuagem': "url('../image/cartao-tatuagem.png')"
    },
    spacing: {
      'tamanho-cartao': '467px',
      'largura-cartao': '830px',
      'padding-negativo': '-90px',
    },
  },
};
export const plugins = [];

