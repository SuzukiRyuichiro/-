class PagesController < ApplicationController
  def new
    @letters = 10.times.map { ('A'..'Z').to_a.sample }
    2.times { @letters << 'AEIOU'.split('').sample }
  end

  def score
    require 'open-uri'
    require 'json'
    url = "https://wagon-dictionary.herokuapp.com/#{params[:userinput]}"
    attempt_serialized = open(url).read
    attempt_parsed = JSON.parse(attempt_serialized)
    attempt_array = params[:userinput].split('')

    if params[:userinput].match?(/[^a-zA-Z]/) || !attempt_parsed["found"]
      @message = "#{params[:userinput]} is not an english word"
    elsif !attempt_array.all? { |letter| attempt_array.count(letter) <= params[:letters].split(' ').count(letter) }
      @message = 'not enough letters in the grid'
    else
      score = params[:userinput].split('').count * 10
      @message = "Well Done! Your score is #{score}"
      @word = params[:userinput]
    end
  end

  def home

  end
end
