# Автономные технологии (airport-hackaton)

Front-end решение команды DoberTeam в рамках хакатона Автономные технологии - Нейросеть для мониторинга воздушного пространства вокруг аэропортов 2024

## Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработке

```bash
npm run dev
```

### Собра production

```bash
quasar build
```

## Docker

Сборка образа

```bash
docker build -t <image_name> -f Dockerfile .
```

Запуск контейнера на порут 80

```bash
docker run --rm -p 80:80 <image_name>
```

Перейти на [http://localhost:80](http://localhost:80)
