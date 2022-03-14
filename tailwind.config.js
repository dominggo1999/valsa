const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if(opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
};

const v = (name) => {
  return `var(--${name})`;
};

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: v('primary'),
        accent: v('accent'),
        'accent-hover': v('accent-hover'),
      },
      fontFamily: {
        primary: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
};
