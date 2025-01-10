// src/pages/Contact/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Контакты</h1>
      <p>
        Свяжитесь со мной через указанные ниже социальные сети или другие платформы. 
        Я всегда рад ответить на ваши вопросы или обсудить сотрудничество!
      </p>
      
      <ul>
        <li>
          <strong>ВКонтакте:</strong> <a href="https://vk.com/i_am_in_love_with_kvas" target="_blank" rel="noopener noreferrer">vk.com/i_am_in_love_with_kvas</a>
        </li>
        <li>
          <strong>Telegram:</strong> <a href="https://t.me/kvass3d" target="_blank" rel="noopener noreferrer">t.me/kvass3d</a>
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:sergeyk321@yandex.ru">sergeyk321@yandex.ru</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/sergeyk321" target="_blank" rel="noopener noreferrer">github.com/sergeyk321</a>
        </li>
      </ul>

      <p>
        Заранее спасибо за ваше сообщение или обратную связь!
      </p>
    </div>
  );
};

export default Contact;
