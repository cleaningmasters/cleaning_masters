// Телефон: дзвінок на мобілці, текст на ПК
const phoneBtn = document.querySelector('.floating-phone');
phoneBtn.addEventListener('click', () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Мобільний пристрій
    window.location.href = 'tel:+380685669590';
  } else {
    // ПК
    alert('Наш номер: +38 068 566 95 90');
  }
});

// Отримуємо параметри з URL (наприклад, ?city=kolomyia)
const params = new URLSearchParams(window.location.search);
const city = params.get('city'); // Отримуємо значення city з URL
const query = params.get('q'); // Отримуємо значення q (пошуковий запит)

const cityContent = document.getElementById('city-content');

const cities = {
  kolomyia: "Ми працюємо у Коломиї — найкращі пропозиції для вашого дому!",
  yabluniv: "Прибираємо у Яблунові — швидко та якісно!",
  kosiv: "Офіси та квартири в Косові тепер завжди чисті!",
  yaremche: "Прибирання в Яремчі — комфорт і чистота у вашому домі!",
  nadvirna: "Надвірна — наш пріоритет. Замовляйте прибирання з нами!"
};

if (city && cities[city.toLowerCase()]) {
  cityContent.textContent = cities[city.toLowerCase()];
} else if (query) {
  cityContent.textContent = `Результати пошуку за запитом: "${query}"`;
} else {
  cityContent.textContent = 'Оберіть місто або введіть пошуковий запит у адресному рядку.';
}

// Показати футер після завантаження сторінки
window.addEventListener('load', () => {
  const footer = document.querySelector('.footer');
  footer.classList.add('show');
});
