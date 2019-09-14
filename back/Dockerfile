FROM elixir:1.5

COPY ./ ./
WORKDIR /Epitech_TM_MP01/api/

RUN mix local.hex --force
RUN mix deps.get
RUN mix ecto.create
RUN mix ecto.migrate
RUN mix phx.server
