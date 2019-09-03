class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    def login(user)
        session[:session_token] = user.reset_session_token
        @current_user = user
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def logout
        session[:session_token] = nil
        current_user.reset_session_token
        @current_user = nil
    end

    def require_login
        unless logged_in?
            render json: {session: ['Invalid Credentials']}, status: 401 
        end
    end

end
