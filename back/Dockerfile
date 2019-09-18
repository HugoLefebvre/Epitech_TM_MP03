FROM elixir:1.9.1

# Create app directory and copy the Elixir projects into it
COPY . /app
WORKDIR /app

RUN apt-get update

# Install hex package manager
# By using --force, we don’t need to type “Y” to confirm the installation
RUN mix local.hex --force
RUN apt-get install -y inotify-tools
RUN mix deps.get
EXPOSE 4000

CMD ["mix", "phx.server"]
