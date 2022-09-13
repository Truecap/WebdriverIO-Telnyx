FROM atools/chrome-headless:java11-node16-latest
WORKDIR /app
ADD . /app

RUN npm install

RUN npm run test:chrome:headless