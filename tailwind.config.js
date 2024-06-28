/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
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
        'cartao-brawhalla': "url('./src/image/cartao-brawhalla.png')",
        'cartao-capoeira': "url('./src/image/cartao-capoeira.png')",
        'cartao-cubomagico': "url('./src/image/cartao-cubomagico.png')",
        'cartao-fotografia': "url('./src/image/cartao-fotografia.png')",
        'cartao-tatuagem': "url('./src/image/cartao-tatuagem.png')",
      },
    },
  },
  plugins: [],
}

