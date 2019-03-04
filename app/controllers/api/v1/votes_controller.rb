module Api::V1
  class VotesController < ApplicationController
    def create
      @vote = Vote.new(vote_params)

      if @vote.save
        render json: @vote, status: :created
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    end

    private

      def vote_params
        params.require(:vote).permit(:card_id)
      end
  end
end
