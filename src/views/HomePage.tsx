import { Component } from 'solid-js';

import hospital from "/src/assets/img/hospital.png";
import car from "/src/assets/img/car.svg"
import medicine from "/src/assets/img/medicine.svg"


const HomePage: Component = () => {
  return (
    <>
      <main class="main-offer">
        <div class="offer">
          <p class="offer_text">
            Красноярская городская больница номер 97
          </p>
          <p class="offer_subtext">
            Специалисты разного <br /> профиля для вашего здоровья
          </p>
          <div class="offer_button-group">
            <a href="#" class="offer_button visit_button">
              Записаться
            </a>
            <a href="#" class="offer_button call_button">
              Связаться
            </a>
          </div>
        </div>
        <img src={hospital} alt="Hospital" class="offer_image" />
      </main>

      <section class="suboffer">
        <div class="suboffer_cards">
          <div class="card">
            <p class="card_text">
              Гарантия на любое лечение
            </p>
          </div>
          <div class="card">
            <p class="card_text">
              Опытные и грамотные специалисты
            </p>
          </div>
          <div class="card">
            <p class="card_text">
              Здоровые и довольные клиенты
            </p>
          </div>
          <div class="card">
            <p class="card_text">
              Новейшее для лечения оборудование
            </p>
          </div>
        </div>
      </section>

      <section class="about">
        <h2 class="about_title">
          О нашей больнице
        </h2>
        <div class="about_card">
          <p class="about_card_text">
            ГКБ им. В.В. Виноградова – это огромный медицинский холдинг, включающий в себя единственный в Юго-Западном административном округе государственный многопрофильный стационар, в 37 отделениях которого ежегодно получают медицинскую помощь свыше 50 000 пациентов, 13 женских консультаций и Родильный дом №4, в котором проходит около 6% всех родов города Москвы и появляется на свет до 10 тысяч новорожденных в год.
          </p>
          <img src={car} alt="car" class="about_image" />
        </div>
      </section>

      <section class="advantages">
        <h2 class="advantages_title">
          Преимущества
        </h2>
        <div class="advantages_card">
          <img src={medicine} alt="" class="advantages_image" />
          <div class="card_texts">
            <p class="card_text">
              Новейшее отечественное оборудование,
              которое уже зарекомедовало себя в 24
              странах мира
            </p>
            <p class="card_text">
              Лучшие специалисты с большим опытом
              работы в различных клиниках
            </p>
            <p class="card_text">
              Гарантия на любое лечение. Мы сделаем
              все, чтобы вы этим не воспользовались,
              а вы и ваши близкие были здоровы
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;
