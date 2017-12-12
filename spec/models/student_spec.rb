require 'rails_helper'

RSpec.describe Student, type: :model do

  it { should belong_to :classroom }

  it { should have_valid(:first_name).when('samantha') }
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:last_name).when('grey') }
  it { should_not have_valid(:last_name).when(nil, '') }

  it { should have_valid(:address).when('123 street') }

  it { should have_valid(:age).when('17') }

  it { should have_valid(:phone_number).when('3567456745') }

  it { should have_valid(:avatar).when('www.testavatar.com') }

end
