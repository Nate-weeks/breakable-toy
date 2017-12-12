require 'rails_helper'

RSpec.describe User, type: :model do
  context "user signs up" do
    it { should have_valid(:email).when('test@gmail.com')}
    it { should_not have_valid(:email).when(nil)}

  end
  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'anotherpassword'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end

  context 'should be able to enter a first_name and last_name' do
    it { should have_valid(:first_name).when("Hahaha")}
    it { should_not have_valid(:first_name).when(nil, '')}

    it { should have_valid(:last_name).when("Hahaha")}
    it { should_not have_valid(:last_name).when(nil, '')}

  end

  context 'should have a classroom and school' do
    it { should belong_to :school }
    it { should belong_to :classroom }
  end
end
