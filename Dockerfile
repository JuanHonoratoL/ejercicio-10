FROM node:22-alpine

WORKDIR /app

# Copiar manifiestos de dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 4200

# Ejecutar el servidor de desarrollo de Angular
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]
