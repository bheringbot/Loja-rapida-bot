const numeroLoja = '5521977015196'; // Seu número com DDI
const lojaNome = 'Loja Rápida';

const produtos = ['Camisa Social Azul', 'Calça Jeans Slim', 'Bermuda Cargo'];
const tamanhos = ['P', 'M', 'G', 'GG'];

const prodSelect = document.getElementById('produto'),
      tamSelect = document.getElementById('tamanho'),
      nomeInput = document.getElementById('nome'),
      preview = document.getElementById('preview');

produtos.forEach(p => prodSelect.add(new Option(p, p)));
tamanhos.forEach(t => tamSelect.add(new Option(t, t)));

function atualizarPreview() {
  const n = nomeInput.value.trim(),
        p = prodSelect.value,
        t = tamSelect.value;

  preview.textContent = n && p && t
    ? `Oi, meu nome é ${n}. Gostaria da ${p} no tamanho ${t}.`
    : 'Preencha tudo para ver a mensagem';
}

[nomeInput, prodSelect, tamSelect].forEach(el => el.oninput = atualizarPreview);

function abrirWhats() {
  if (!nomeInput.value || !prodSelect.value || !tamSelect.value) {
    return alert('Preencha todos os campos!');
  }
  const msg = encodeURIComponent(preview.textContent);
  window.open(`https://wa.me/${numeroLoja}?text=${msg}`, '_blank');
}
