require 'rails_helper'

# create_table "teachers", force: true do |t|
#     t.string   "first_name"
#     t.string   "last_name"
#     t.string   "username"
#     t.string   "security_question"
#     t.string   "security_answer"
#     t.string   "password_digest"
#     t.integer  "school_id"
#     t.datetime "created_at"
#     t.datetime "updated_at"
#   end


RSpec.describe Teacher, :type => :model do
    describe "associations" do
    before do
      @teacher = Teacher.create
    end

    it 'should belong to a school' do
      @teacher.school = School.create
      @teacher.save
      expect(@teacher.school).to be_a(School)
    end
  end
end
