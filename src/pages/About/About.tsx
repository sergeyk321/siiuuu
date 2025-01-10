// src/pages/About/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>О проекте</h1>
      <p>
        Этот проект — это простое веб-приложение, созданное с использованием <strong>React</strong> и <strong>TypeScript</strong>.
        Оно демонстрирует возможности построения динамических веб-страниц с акцентом на удобство, адаптивный дизайн и современный пользовательский интерфейс.
      </p>

      <h2>Используемые технологии</h2>
      <ul>
        <li><strong>React</strong>: Библиотека JavaScript для создания пользовательских интерфейсов.</li>
        <li><strong>TypeScript</strong>: Надстройка над JavaScript, добавляющая статическую типизацию для повышения надёжности кода.</li>
        <li><strong>React Router</strong>: Библиотека маршрутизации для React, позволяющая управлять страницами и URL.</li>
        <li><strong>CSS</strong>: Для стилизации компонентов и создания адаптивного дизайна.</li>
        <li><strong>Fetch API</strong>: Используется для выполнения HTTP-запросов и получения данных с сервера.</li>
      </ul>

      <div className="api-section">
        <h2>Используемое API</h2>
        <p>
          Для получения данных о странах используется <strong>REST Countries API</strong>.
          Это API предоставляет информацию о странах, включая их название, столицу, регион, подрегион, численность населения.
          Используются следующие эндпоинты:
        </p>
        <ul>
          <li><strong>GET /v3.1/all</strong>: Получает данные о всех доступных странах.</li>
          <li><strong>GET /v3.1/name/{'{name}'}</strong>: Получает информацию о конкретной стране по её названию.</li>
        </ul>
      </div>

      <h2>Как это работает</h2>
      <p>
        На главной странице вы можете увидеть сетку стран, где каждая страна представлена своим флагом и названием. 
        При нажатии на страну вы попадёте на страницу с детальной информацией о ней, включая столицу, регион, языки и численность населения.
        Страны сгруппированы по регионам, а внутри каждого региона отсортированы по алфавиту.
      </p>

      <div className="contribute-section">
        <h2>Как внести вклад</h2>
        <p>
          Если вы хотите внести изменения в этот проект, свяжитесь со мной. Контакты представлены во вкладке Contact.</p>
      </div>
    </div>
  );
};

export default About;
