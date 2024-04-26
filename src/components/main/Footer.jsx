import React from "react";

const links = [
  {
    title: "Ответы на вопросы",
    href: "",
  },
  {
    title: "Контакты",
    href: "",
  },
  {
    title: "Работа в самокате",
    href: "",
  },
  {
    title: "Для поставщиков",
    href: "",
  },
  {
    title: "Стать курьером-партнером",
    href: "",
  },
  {
    title: "Линия доверия Самоката",
    href: "",
  },
  {
    title: "Правила и соглашения",
    href: "",
  },
  {
    title: "Политика конфеденциальности",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className="pt-7 px-3 sticky bottom-6 ">
      <div className="grid gap-y-2 grid-cols-4  gap-x-[56px] pt-7 pb-6 text-body-1 text-color-1">
        {links.map((link, index) => (
          <a
            key={link.title}
            href={link.href}
            className={(index + 1) % 3 === 0 ? "col-span-2" : undefined}
          >
            {link.title}
          </a>
        ))}
      </div>
      <span className="text-color-2 text-body-3">
        Зона, время, товары и предложения доставки ограничены. Организатор,
        продавец ООО «Умный ритейл» ОГРН 1177847261602, 192019, Санкт‑
        Петербург, улица Седова, 11, литер А, офис 627. Информационные услуги
        оказываются ООО «Умное пространство» ОГРН 1137847232852, 192019,
        Санкт-Петербург, улица Седова, 11 лит. А
      </span>
    </footer>
  );
};

export default Footer;
