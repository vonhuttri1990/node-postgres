# Dockerfile

FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app

RUN npm install
COPY . .
RUN chown -R app /opt/app
USER app
EXPOSE 3000
CMD ["npm", "run", "pm2"]