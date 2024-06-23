document.addEventListener('DOMContentLoaded', function() {
    // Função para calcular o frete
    function calcularFrete(event) {
      event.preventDefault();
  
      // Obtenha os valores dos campos de entrada
      const kmRodados = parseFloat(document.getElementById('km-rodados').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
      const valorDiesel = parseFloat(document.getElementById('valor-diesel').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
      const mediaConsumo = parseFloat(document.getElementById('media-consumo').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
      const valorFretePorTonelada = parseFloat(document.getElementById('valor-frete-tonelada').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
      const pesoCarga = parseFloat(document.getElementById('peso-carga-tonelada').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
      const porcentagemComissao = parseFloat(document.getElementById('porcentagem-comissao').value.replace(/,/g, '.')) / 100; // Corrigido: Substitui vírgula por ponto e divide por 100
      const valorPedagio = parseFloat(document.getElementById('valor-pedagio').value.replace(/,/g, '.')); // Corrigido: Substitui vírgula por ponto
  
      // Realize os cálculos
      const consumoTotalDiesel = (kmRodados / mediaConsumo) * valorDiesel;
      const valorPorKm = (valorFretePorTonelada * pesoCarga) / kmRodados;
      const comissaoReceber = (valorFretePorTonelada * pesoCarga) * porcentagemComissao; 
      const freteTotal = valorFretePorTonelada * pesoCarga;
      const freteLiquido = freteTotal - consumoTotalDiesel - valorPedagio - comissaoReceber;
  
      // Formate os resultados antes de exibir
      const valorPorKmFormatado = accounting.formatNumber(valorPorKm, 2, ',', '.');
      const consumoTotalDieselFormatado = accounting.formatNumber(consumoTotalDiesel, 2, ',', '.');
      const comissaoReceberFormatado = accounting.formatNumber(comissaoReceber, 2, ',', '.');
      const freteTotalFormatado = accounting.formatNumber(freteTotal, 2, ',', '.');
      const freteLiquidoFormatado = accounting.formatNumber(freteLiquido, 2, ',', '.');
  
      // Atualize a div de resultados
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = `
          <p>Valor por quilômetro: R$ ${valorPorKmFormatado}</p>
          <p>Consumo total de diesel: R$ ${consumoTotalDieselFormatado}</p>
          <p>Comissão a Receber: R$ ${comissaoReceberFormatado}</p>
          <p>Frete total: R$ ${freteTotalFormatado}</p>
          <p>Frete Líquido: R$ ${freteLiquidoFormatado}</p>
      `;
    }
  
    // Adicione um ouvinte de evento ao formulário de calculadora
    document.getElementById('calculator-form').addEventListener('submit', calcularFrete);
  
    // Adicione um ouvinte de evento ao botão de reset para limpar os resultados e os campos de entrada
    document.getElementById('reset').addEventListener('click', function(event) {
      document.getElementById('results').innerHTML = ''; // Limpa a div de resultados
      document.getElementById('calculator-form').reset(); // Limpa os campos de entrada do formulário
    });
  
    // Adiciona Placeholders
    const camposMonetarios = document.querySelectorAll('input[type="number"]');
    camposMonetarios.forEach(campo => {
      if (campo.id === 'km-rodados') {
        campo.setAttribute('placeholder', '0,00');
      } else if (campo.id === 'media-consumo') {
        campo.setAttribute('placeholder', '0,00');
      } else if (campo.id === 'porcentagem-comissao') {
        campo.setAttribute('placeholder', '0,00');
      } else if (campo.id === 'peso-carga-tonelada') { 
        campo.setAttribute('placeholder', '0,00');
      } else {
        campo.setAttribute('placeholder', 'R$ 0,00'); // Adiciona Placeholder para campos monetários
      }
    });
  });
  
  // Código para o menu hambúrguer
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  

  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });