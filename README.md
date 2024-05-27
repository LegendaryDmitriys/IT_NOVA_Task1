# Как запустить проект

1. **Установка зависимостей**

* Склонируйте репозиторий в вашу рабочую папку.

```bash
   git clone https://github.com/LegendaryDmitriys/IT_Nova_Task1
```

* Установите нужные зависимости 

```bash
   npm install
```
* Запустите проект
  
```bash
   npm install
```

## Анализ при другой стуктуре данных

Вместо использования массива объектов с ключами 'category_name' и 'img_path', можно было бы использовать объект, где ключами были бы названия категорий, а значениями — массивы путей к изображениям.

```javasript
export const objects = {
    elements: {
        'All': [
            '/images/Print2.jpg',
            '/images/WebDesign.jpg',
            '/images/Print.jpeg',
            '/images/Logo.jpg',
            '/images/Motion.jpg',
            '/images/WebDesign2.jpg'
        ],
        'Print': [
            '/images/Print2.jpg',
            '/images/Print.jpeg'
        ],
        'Web design': [
            '/images/WebDesign.jpg',
            '/images/WebDesign2.jpg'
        ],
        'Logo': [
            '/images/Logo.jpg'
        ],
        'Motion': [
            '/images/Motion.jpg'
        ]
    }
};
```
Так как при такой структуре можно было сразу вытягивать нужную категорию,а не как с массивом объектов получать все значения, а после чего их отсеивать при помощи фильтрации.

