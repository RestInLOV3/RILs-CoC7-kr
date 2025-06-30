Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'coc7-ko-translation',
      lang: 'ko',
      dir: 'compendiums'
    });
  }
});
