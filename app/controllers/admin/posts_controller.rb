class Admin::PostsController < Admin::BaseController
  before_action :set_post, only: [:show, :edit, :update, :destroy, :verify, :publish, :deprecate]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.eager_loading.last_published
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = current_user.posts.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = current_user.posts.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to [:admin, @post], notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to [:admin, @post], notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to admin_posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def verify
    run_transition('verify')
  end

  def publish
    run_transition('publish')
  end

  def deprecate
    run_transition('deprecate')
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :subtitle, :content, :image, :tag_list, :youtube_id)
    end

    def run_transition(state)
      case state
      when 'verify'
        verify_post
      when 'publish'
        if @post.publish!
          redirect_to [:admin, @post], notice: 'CONGRATULATIONS!, your post is published!'
        end
      when 'deprecate'
        if @post.deprecate!
          redirect_to [:admin, @post], notice: 'Post has been deprecated!'
        end
      else
        redirect_to [:admin, @post], notice: 'That transition does not exist!'
      end
    end

    def verify_post
      begin
        if @post.verify!
          redirect_to [:admin, @post], notice: 'You can publish the post right now!'
        end
      rescue AASM::InvalidTransition
        if !@post.rejected? && @post.reject!
          redirect_to [:admin, @post], alert: 'Post was rejected!, missing post data.'
        else
          redirect_to [:admin, @post], alert: 'Missing post data, review again please!'
        end
      end
    end
end
