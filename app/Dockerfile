FROM node:7.0.0

RUN mkdir -p /tiny

WORKDIR /tiny

ADD . /tiny

RUN cd /tiny && npm install

EXPOSE 300

CMD ["node", "/tiny/server.js"]