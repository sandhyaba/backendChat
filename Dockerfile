From node:18
WORKDIR /app
RUN apt-get update && apt-get install musl-dev -y
RUN ln -s /usr/lib/x86_64-linux-musl/libc.so /lib/libc.musl-x86_64.so.1
COPY package.json /app
RUN npm install --pure-lockfile
RUN npm install sharp --ignore-scripts=false
COPY . /app
EXPOSE 3000
CMD [ "npm", "start" ]