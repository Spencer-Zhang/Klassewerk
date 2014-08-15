class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def current_teacher
    if session[:user_type] == 'teacher'
      @current_teacher ||= Teacher.find(session[:user_id])
    end
  end

  def current_student
    if session[:user_type] == 'student'
      @current_student ||= Student.find(session[:user_id])
    end
  end

end
