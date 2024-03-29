defmodule ApiWeb.TeamView do
  use ApiWeb, :view
  alias ApiWeb.TeamView

  def render("index.json", %{teams: teams}) do
    %{data: render_many(teams, TeamView, "team.json")}
  end

  def render("show.json", %{team: team}) do
    %{data: render_one(team, TeamView, "team.json")}
  end

  def render("showAll.json", %{team: team}) do
    %{data: render_one(team, TeamView, "teamAll.json")}
  end

  def render("team.json", %{team: team}) do
    %{id: team.id,
      name: team.name}
  end

  def render("teamAll.json", %{team: team}) do
    %{id: team.id,
      name: team.name,
      users: render_many(team.users, ApiWeb.UserView, "user.json")}
  end
end
