defmodule ApiWeb.UserController do
  use ApiWeb, :controller
  
  require Logger

  alias Api.Auth
  alias Api.Auth.User

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    users = Auth.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Auth.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Auth.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def showUserById(conn, %{"userID" => userID}) do
    user = Auth.get_user!(userID)
    render(conn, "show.json", user: user)
  end

  def showUser(conn, %{"email" => email, "username" => username}) do	
    # Find in the database :
    # parameter 1 : name schema
    # paramater 2 : parameters (attributes)
    case Api.Repo.get_by(User, [email: email, username: username]) do
			nil -> {:error, :not_found} # Null : not found 
			user -> {:ok, user} # Found : give the user 
			render(conn, "user.json", user: user) # Show in json, the user
		end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Auth.get_user!(id)

    with {:ok, %User{} = user} <- Auth.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Auth.get_user!(id)
    with {:ok, %User{}} <- Auth.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
