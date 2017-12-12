require 'rails_helper'

RSpec.describe School, type: :model do

  it { should have_valid(:name).when('test name') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:description).when('test description') }

  it { should have_valid(:creator_id).when(3) }

  it { should have_valid(:avatar).when('www.testavatar.com') }
end
