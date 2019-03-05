module Api::V1
  class CardsController < ApplicationController
    before_action :set_card, only: [:show, :update, :destroy]

    # GET /cards
    def index
      @cards = Card.all.order(created_at: :desc).map {|c| c.attributes.merge(votes: c.votes.count)}

      render json: @cards
    end

    # GET /cards/1
    def show
      render json: @card
    end

    # POST /cards
    def create
      @card = Card.new(card_params)

      if @card.save
        render json: @card, status: :created
      else
        render json: @card.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /cards/1
    def update
      if @card.update(card_params)
        render json: @card
      else
        render json: @card.errors, status: :unprocessable_entity
      end
    end

    # DELETE /cards/1
    def destroy
      @card.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_card
        @card = Card.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def card_params
        params.require(:card).permit(:title)
      end
  end
end
