require "rails_helper"

RSpec.describe Classroom, type: :model do

    it { should belong_to :school }

    it { should have_valid(:name).when('test high school')}
    it { should_not have_valid(:name).when(nil, '') }

    it { should have_valid(:description).when("test description") }

    it { should have_valid(:creator_id).when('1') }

end
