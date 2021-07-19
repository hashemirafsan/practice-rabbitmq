FROM php:7.4-cli

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y libzip-dev

RUN docker-php-ext-install sockets \
    && docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | \
php -- --install-dir=/usr/bin/ --filename=composer --version=2.0.9

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY composer*.json ./

RUN composer install

COPY . .

EXPOSE 5002

CMD [ "php", "./src/index.php" ]