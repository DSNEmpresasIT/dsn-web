FROM node:20 as build

WORKDIR /app

# Copiar package.json y package-lock.json para la instalación de dependencias
COPY package*.json ./

RUN npm install

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiar el resto de los archivos
COPY . .

# Hacer el build para la aplicación principal
RUN ng build --configuration=production

# Hacer el build para el proyecto 'dashboard-ecommerce'
WORKDIR /app/dashboard-ecommerce
RUN npm install
RUN npm run build

# Copiar la configuración de nginx
FROM nginx:latest

# Configurar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos generados por los builds de ambas aplicaciones Angular
COPY --from=build /app/dist/dsn-web /usr/share/nginx/html
COPY --from=build /app/dashboard-ecommerce/dist/dashboard-ecommerce /usr/share/nginx/html/dashboard-ecommerce

# Exponer el puerto
EXPOSE 80
